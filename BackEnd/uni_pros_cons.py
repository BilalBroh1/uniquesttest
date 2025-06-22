# uni_summary.py

import requests, os, json
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()
key_pros = os.getenv("OPENAI_API_KEY_pros")    # ← grab the *other* key
if not key_pros:
    raise RuntimeError("OPENAI_API_KEY_pros not set")

client = OpenAI(api_key=key_pros)              # ← remove hard-coded key!

def fetch_reddit_posts(university_name, limit=10):
    headers = {
        "User-Agent": "Mozilla/5.0"
    }
    query = university_name.replace(" ", "+")
    url = f"https://www.reddit.com/search.json?q={query}&sort=top&limit={limit}"

    response = requests.get(url, headers=headers)
    if response.status_code != 200:
        raise Exception("Reddit may be rate-limiting you or rejecting access.")

    posts = response.json()["data"]["children"]
    combined_text = ""

    for post in posts:
        title = post["data"].get("title", "")
        body = post["data"].get("selftext", "")
        if len(body.strip()) < 40:
            continue  # skip short or empty posts
        combined_text += f"TITLE: {title}\nPOST: {body}\n---\n"

    return combined_text.strip()

def summarize_to_pros_cons(university_name, reddit_text):
    prompt = f"""
You are an assistant that helps summarize student opinions on universities.

TASK:
while keeping it short and informative; Based on the following Reddit posts about "{university_name}", list the 3 most frequent pros and cons.
For each point, create a short quote with the information from the posts. on the other hand for tuition and scholorships you do not have to limit yourself to
reddit you can use any source, for scholorships give any 2 scholorships offered by the respective school. For tuition, provide the tuition fee for the current academic year.
in the following JSON format:
{{
  "pros": [{{ "point": "...", "quote": "..." }}, ...],
  "cons": [{{ "point": "...", "quote": "..." }}, ...],
  "tuition": [{"tuition :"}],
  "scholorships": [{"scholarships :"}],
}}

--- START POSTS ---
{reddit_text}
--- END POSTS ---
"""

    response = client.chat.completions.create(
        model="gpt-4o-mini",  # or "gpt-4o"
        messages=[{"role": "user", "content": prompt}],
        temperature=0.3,
        max_tokens=600
    )

    reply = response.choices[0].message.content.strip()

    try:
        return json.loads(reply)
    except json.JSONDecodeError:
        print("❌ GPT response was not valid JSON. Raw output:")
        print(reply)
        return None

def main():
    uni = input("Enter the name of the university: ")
    print(f"\n🔍 Fetching Reddit posts about '{uni}'...")
    reddit_text = fetch_reddit_posts(uni)

    print("Searching the web ...")
    summary = summarize_to_pros_cons(uni, reddit_text)

    if summary:
        print("Info:")
        print(json.dumps(summary, indent=2, ensure_ascii=False))
    else:
        print("⚠️ No summary returned. Try again later or change your input.")

if __name__ == "__main__":
    main()

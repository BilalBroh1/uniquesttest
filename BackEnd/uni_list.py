try:
    from openai import OpenAI
except ImportError:  # openai package not installed
    OpenAI = None
import os
import json
try:
    from dotenv import load_dotenv
except ImportError:  # python-dotenv not installed
    def load_dotenv():
        pass
from sample_data import filter_programs

load_dotenv()
key_list = os.getenv("OPENAI_API_KEY_list")
client = OpenAI(api_key=key_list) if key_list else None

def ask_gpt_eligibility(program: str, average: int) -> str:
    prompt = f"""
A student in Ontario is interested in studying "{program}" and has a high school average of {average}%.
Please return a list of real Ontario universities and specific programs the student is likely eligible for based on typical admission cutoffs (e.g., averages in the 75–95% range). Use your general knowledge of Canadian admissions as of 2023.
Respond ONLY in JSON with this format:
{{
  "eligible_programs": [
    {{ "university": "...", "program": "...", "estimated_cutoff": number }},
    ...
  ]
}}
"""
    if client:
        chat = client.chat.completions.create(
            model="gpt-4o",
            temperature=0.4,
            messages=[{"role": "user", "content": prompt}],
            max_tokens=700,
        )
        return chat.choices[0].message.content.strip()
    else:
        eligible_list = filter_programs(program, average)
        return json.dumps({"eligible_programs": eligible_list})

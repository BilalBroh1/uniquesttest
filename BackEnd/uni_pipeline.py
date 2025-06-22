import json
import sys
from uni_list import ask_gpt_eligibility
from uni_pros_cons import summarize_to_pros_cons

def main():
    if len(sys.argv) != 3:
        sys.exit(1)

    program = sys.argv[1]
    try:
        average = int(sys.argv[2])
    except ValueError:
        sys.exit(1)

    eligible_json = ask_gpt_eligibility(program, average)

    try:
        eligible_data = json.loads(eligible_json)["eligible_programs"]
    except (json.JSONDecodeError, KeyError):
        sys.exit(1)

    if not eligible_data:
        sys.exit(0)

    combined = []
    for entry in eligible_data:
        uni_name = entry.get("university")
        prog     = entry.get("program")

        try:
            details = summarize_to_pros_cons(uni_name)
        except Exception as e:
            details = {"error": f"Failed to summarize: {e}"}

        combined.append({
            "university": uni_name,
            "program": prog,
            "estimated_cutoff": entry.get("estimated_cutoff"),
            "details": details
        })

    print(json.dumps({"results": combined}, indent=2, ensure_ascii=False))

if __name__ == "__main__":
    main()
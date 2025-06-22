import subprocess

def main():
    print("🎓 Ontario University Finder")
    program = input("Enter your program of interest: ").strip()
    avg = input("Enter your average (0–100): ").strip()

    # Run uni_pipeline.py with the provided inputs
    print("\n⏳ Running search...\n")
    subprocess.run(["python", "BackEnd/uni_pipeline.py", program, avg])

if __name__ == "__main__":
    main()

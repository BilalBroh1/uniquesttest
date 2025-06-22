  // Sample JSON data
  const universityData = {
      "universities": [
          {
              "name": "University of Toronto",
              "programs": [
                  {
                      "name": "Computer Science",
                      "category": "technology",
                      "minGrade": 85,
                      "requiredSubjects": ["math", "english"],
                      "tuition": "$14,180/year",
                      "scholarships": ["Merit Scholarship ($5,000)", "Tech Innovation Award ($3,000)"],
                      "pros": ["Top-ranked program", "Excellent job prospects", "Research opportunities"],
                      "cons": ["Highly competitive", "Large class sizes", "Expensive living costs"],
                      "reviews": [
                          {"rating": 4, "text": "Challenging but rewarding program with amazing professors"},
                          {"rating": 5, "text": "Great networking opportunities and industry connections"}
                      ]
                  },
                  {
                      "name": "Business Administration",
                      "category": "business",
                      "minGrade": 80,
                      "requiredSubjects": ["math", "english"],
                      "tuition": "$13,490/year",
                      "scholarships": ["Business Excellence Award ($4,000)", "Leadership Scholarship ($2,500)"],
                      "pros": ["Strong alumni network", "Internship opportunities", "Diverse curriculum"],
                      "cons": ["Very competitive admission", "High workload", "Expensive program"],
                      "reviews": [
                          {"rating": 4, "text": "Excellent preparation for corporate world"},
                          {"rating": 3, "text": "Good program but very demanding schedule"}
                      ]
                  }
              ]
          },
          {
              "name": "McGill University",
              "programs": [
                  {
                      "name": "Biomedical Engineering",
                      "category": "engineering",
                      "minGrade": 88,
                      "requiredSubjects": ["math", "science", "english"],
                      "tuition": "$4,239/year (Quebec residents)",
                      "scholarships": ["Engineering Excellence Award ($6,000)", "Research Scholarship ($4,500)"],
                      "pros": ["World-class research facilities", "Low tuition for Quebec residents", "Strong industry partnerships"],
                      "cons": ["Extremely competitive", "Heavy course load", "Limited spots available"],
                      "reviews": [
                          {"rating": 5, "text": "Incredible program with cutting-edge research opportunities"},
                          {"rating": 4, "text": "Challenging but the professors are very supportive"}
                      ]
                  },
                  {
                      "name": "Arts & Science",
                      "category": "arts",
                      "minGrade": 75,
                      "requiredSubjects": ["english"],
                      "tuition": "$4,239/year (Quebec residents)",
                      "scholarships": ["Liberal Arts Scholarship ($3,000)", "Academic Achievement Award ($2,000)"],
                      "pros": ["Flexible curriculum", "Small class sizes", "Diverse course options"],
                      "cons": ["Less specialized", "Fewer job guarantees", "Broad focus"],
                      "reviews": [
                          {"rating": 4, "text": "Great for exploring different interests"},
                          {"rating": 3, "text": "Good foundation but wish it was more focused"}
                      ]
                  }
              ]
          },
          {
              "name": "University of British Columbia",
              "programs": [
                  {
                      "name": "Applied Science (Engineering)",
                      "category": "engineering",
                      "minGrade": 84,
                      "requiredSubjects": ["math", "science", "english"],
                      "tuition": "$6,636/year",
                      "scholarships": ["Engineering Entrance Award ($5,000)", "Innovation Scholarship ($3,500)"],
                      "pros": ["Beautiful campus", "Strong co-op program", "Innovative curriculum"],
                      "cons": ["Competitive program", "Rainy weather", "High living costs in Vancouver"],
                      "reviews": [
                          {"rating": 5, "text": "Amazing co-op opportunities and beautiful campus"},
                          {"rating": 4, "text": "Great program but expensive city to live in"}
                      ]
                  },
                  {
                      "name": "Life Sciences",
                      "category": "science",
                      "minGrade": 82,
                      "requiredSubjects": ["science", "math", "english"],
                      "tuition": "$6,636/year",
                      "scholarships": ["Science Excellence Award ($4,000)", "Research Grant ($2,500)"],
                      "pros": ["Excellent research opportunities", "Modern facilities", "Diverse specializations"],
                      "cons": ["Large program size", "Competitive atmosphere", "Limited lab space"],
                      "reviews": [
                          {"rating": 4, "text": "Great research facilities and passionate professors"},
                          {"rating": 3, "text": "Good program but very large classes in first year"}
                      ]
                  }
              ]
          }
      ]
  };
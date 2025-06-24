from typing import Dict, List

# Structure for recommended topics
recommended_topics = {
    "Foundational Literacy": {
        "Letter Level": {
            "9months": {
                "July": {
                    "Week 1": [
                        "Introduction to Alphabet (A–Z overview through songs & stories)"
                    ],
                    "Week 2": ["Uppercase Letter Recognition"],
                    "Week 3": ["Lowercase Letter Recognition"],
                    "Week 4": ["Revision with workbook exercises and split test"],
                },
                "August": {
                    "Week 1": ["Listening Games – Identify Sounds in Environment"],
                    "Week 2": ["Identify Beginning Sounds in Words"],
                    "Week 3": ["Group Objects by Same Beginning Sound"],
                    "Week 4": ["Revision with workbook exercises and split test"],
                },
                "September": {
                    "Week 1": ["A–F Sounds (with example words and actions)"],
                    "Week 2": ["G–L Sounds"],
                    "Week 3": ["M–R Sounds"],
                    "Week 4": ["Revision with workbook exercises and split test"],
                },
                "October": {
                    "Week 1": ["Blend CVC Words (e.g., cat, pin, bug)"],
                    "Week 2": ["Identify Middle Vowel Sounds in CVC Words"],
                    "Week 3": ["Word Families (e.g., -at, -in, -op)"],
                    "Week 4": ["Revision with workbook exercises and split test"],
                },
                "November": {
                    "Week 1": ["Consonant Blends (bl, tr, gr, sn, etc.)"],
                    "Week 2": ["Vowel Digraphs (ai, ee, oa, etc.)"],
                    "Week 3": ["Practice with Real-life Object Matching"],
                    "Week 4": ["Revision with workbook exercises and split test"],
                },
                "December": {
                    "Week 1": [
                        "Speak Words with Clear Sounds (initial/final emphasis)"
                    ],
                    "Week 2": ["Use Words in Simple Sentences"],
                    "Week 3": ["Basic Question-Answer Conversations"],
                    "Week 4": ["Revision with workbook exercises and split test"],
                },
                "January": {
                    "Week 1": ["Learn and Use 10–15 High-Frequency Words"],
                    "Week 2": ["Guess Meaning from Picture Clues"],
                    "Week 3": ["Contextual Vocabulary from Stories"],
                    "Week 4": ["Revision with workbook exercises and split test"],
                },
                "February": {
                    "Week 1": ["Synonyms"],
                    "Week 2": ["Antonyms"],
                    "Week 3": ["Vocabulary Sorting Games"],
                    "Week 4": ["Revision with workbook exercises and split test"],
                },
                "March": {
                    "Week 1": ["Sound and Word Games (CVC, Blends, Digraphs)"],
                    "Week 2": ["Listening & Speaking Skits"],
                    "Week 3": ["Vocabulary Quiz & Storytelling"],
                    "Week 4": ["Final showcase and skill reflection"],
                },
            },
            "5months": {
                "July": {
                    "Week 1": [
                        "Alphabet A–Z Introduction (song, story, visuals)",
                        "Uppercase Recognition",
                    ],
                    "Week 2": ["Lowercase Letters", "Match Uppercase & Lowercase"],
                    "Week 3": ["Beginning Sounds in Words", "Sound Sorting"],
                    "Week 4": ["Revision with workbook exercises and split test"],
                },
                "August": {
                    "Week 1": ["A–F Letter-Sound Mapping"],
                    "Week 2": ["G–L Letter-Sound Mapping"],
                    "Week 3": ["M–Z Letter-Sound Mapping"],
                    "Week 4": ["Revision with workbook exercises and split test"],
                },
                "September": {
                    "Week 1": ["CVC Words (Beginning, Middle, Ending Sounds)"],
                    "Week 2": ["Word Families (-at, -in, -op)"],
                    "Week 3": ["Blends and Digraphs (bl, tr, ai, ee, etc.)"],
                    "Week 4": ["Revision with workbook exercises and split test"],
                },
                "October": {
                    "Week 1": ["Speaking Clearly + Using Words in Sentences"],
                    "Week 2": ["Daily Conversations + Giving/Following Instructions"],
                    "Week 3": ["Vocabulary: Sight Words, Picture Clues, Context Use"],
                    "Week 4": ["Revision with workbook exercises and split test"],
                },
                "November": {
                    "Week 1": ["Synonyms + Antonyms"],
                    "Week 2": ["Vocabulary Sorting + Use in Stories"],
                    "Week 3": ["Final Review – Phonics, Speaking, Vocabulary"],
                    "Week 4": ["Final Showcase + Oral/Worksheet Reflection"],
                },
            },
        },
        "Word Level": {
            "9months": {
                "July": {
                    "Week 1": [
                        "Engage in simple conversations using common words and phrases"
                    ],
                    "Week 2": ["Use greetings and polite expressions in context"],
                    "Week 3": [
                        "Practice common situational phrases (e.g., classroom, home)"
                    ],
                    "Week 4": [
                        "Revision – Workbook speaking/listening drills + Split Test (e.g., listening MCQ + short oral test)"
                    ],
                },
                "August": {
                    "Week 1": ["Identify and differentiate common nouns"],
                    "Week 2": ["Recognise singular and plural forms of nouns"],
                    "Week 3": ["Use nouns in sentences correctly"],
                    "Week 4": [
                        "Revision – Workbook activities on noun usage + Split Test (e.g., identification + sentence formation)"
                    ],
                },
                "September": {
                    "Week 1": ["Identify personal pronouns (he, she, it, etc.)"],
                    "Week 2": [
                        "Understand and use possessive pronouns (his, her, their)"
                    ],
                    "Week 3": ["Use pronouns to replace nouns in sentences"],
                    "Week 4": [
                        "Revision – Pronoun-focused workbook + Split Test (fill-in-the-blanks + rewriting sentences)"
                    ],
                },
                "October": {
                    "Week 1": ["Identify adjectives in sentences"],
                    "Week 2": ["Use comparative adjectives (-er form)"],
                    "Week 3": ["Use superlative adjectives (-est form)"],
                    "Week 4": [
                        "Revision – Workbook exercises + Split Test (comparison chart + error correction)"
                    ],
                },
                "November": {
                    "Week 1": ['Use definite article "the" to indicate specific nouns'],
                    "Week 2": ['Use indefinite articles "a" and "an"'],
                    "Week 3": ["Distinguish between specific and general contexts"],
                    "Week 4": [
                        "Revision – Articles practice in workbook + Split Test (multiple-choice + usage)"
                    ],
                },
                "December": {
                    "Week 1": ["Identify and use action verbs in sentences"],
                    "Week 2": ["Understand and apply different verb tenses"],
                    "Week 3": ["Ensure subject-verb agreement in sentences"],
                    "Week 4": [
                        "Revision – Verb tense drills + Split Test (tense table + short passage correction)"
                    ],
                },
                "January": {
                    "Week 1": ["Identify common prepositions (in, on, at, by, etc.)"],
                    "Week 2": [
                        "Understand how prepositions describe spatial relationships"
                    ],
                    "Week 3": ["Use prepositions to improve grammar proficiency"],
                    "Week 4": [
                        "Revision – Preposition maze/workbook + Split Test (picture-based + blanks)"
                    ],
                },
                "February": {
                    "Week 1": [
                        "Identify and use WH words (who, what, where, when, why, how)"
                    ],
                    "Week 2": ["Formulate WH questions orally and in writing"],
                    "Week 3": ["Practice asking and answering questions in sentences"],
                    "Week 4": [
                        "Revision – Workbook Q&A + Split Test (question framing + response comprehension)"
                    ],
                },
                "March": {
                    "Week 1": ["Revise nouns, pronouns, and articles"],
                    "Week 2": ["Revise verbs, adjectives, and prepositions"],
                    "Week 3": ["Revise WH questions and sentence formation"],
                    "Week 4": [
                        "Final Test – Full workbook-based assessment + Split Final Test (oral + written)"
                    ],
                },
            },
            "5months": {
                "July": {
                    "Week 1": ["Simple conversations, identify nouns"],
                    "Week 2": ['Greetings, plurals, "a" and "an"'],
                    "Week 3": ['Intonation, use nouns & "the"'],
                    "Week 4": ["Revision – Workbook + Split Test"],
                },
                "August": {
                    "Week 1": ["Personal pronouns, action verbs"],
                    "Week 2": ["Possessive pronouns, verb tenses"],
                    "Week 3": ["Replace nouns, subject-verb match"],
                    "Week 4": ["Revision – Workbook + Split Test"],
                },
                "September": {
                    "Week 1": ["Identify and use adjectives"],
                    "Week 2": ["Comparative adjectives (-er)"],
                    "Week 3": ["Superlative adjectives (-est)"],
                    "Week 4": ["Revision – Workbook + Split Test"],
                },
                "October": {
                    "Week 1": ["Common prepositions (in, on, at)"],
                    "Week 2": ["Spatial use, intro WH words"],
                    "Week 3": ["Ask/answer WH questions"],
                    "Week 4": ["Revision – Workbook + Split Test"],
                },
                "November": {
                    "Week 1": ["Review nouns, articles, pronouns"],
                    "Week 2": ["Review verbs, adjectives"],
                    "Week 3": ["Review prepositions, WH words"],
                    "Week 4": ["Final Test – Workbook + Split Test"],
                },
            },
        },
        "Sentence Level": {
            "9months": {
                "July": {
                    "Week 1": ["Identify subject and predicate in simple sentences"],
                    "Week 2": ["Explore simple sentence construction"],
                    "Week 3": ["Build compound sentences using conjunctions"],
                    "Week 4": ["Revision + Split Test"],
                },
                "August": {
                    "Week 1": ["Introduction to complex sentences"],
                    "Week 2": ["Combine clauses using conjunctions"],
                    "Week 3": ["Recognize parts of speech in context"],
                    "Week 4": ["Revision + Split Test"],
                },
                "September": {
                    "Week 1": ["Understand 2-step instructions (Listen & Act)"],
                    "Week 2": ["Multi-step instructions (Written/Verbal)"],
                    "Week 3": ["Practice giving instructions in daily contexts"],
                    "Week 4": ["Revision + Split Test"],
                },
                "October": {
                    "Week 1": [
                        "Recognize and use common contractions (e.g., can't, I'm)"
                    ],
                    "Week 2": ["Differentiate contractions vs possessives"],
                    "Week 3": ["Apostrophes in possessive nouns (singular/plural)"],
                    "Week 4": ["Revision + Split Test"],
                },
                "November": {
                    "Week 1": ["Use commas, periods, question & exclamation marks"],
                    "Week 2": ["Apply punctuation for pauses & breaks"],
                    "Week 3": ["Explore colons, semicolons, dashes, and quotes"],
                    "Week 4": ["Revision + Split Test"],
                },
                "December": {
                    "Week 1": ["Identify past tense verbs in action"],
                    "Week 2": ["Regular vs irregular past tense forms"],
                    "Week 3": ["Write short stories using past tense"],
                    "Week 4": ["Revision + Split Test"],
                },
                "January": {
                    "Week 1": ["Use of simple present tense in routine events"],
                    "Week 2": ["Present continuous for ongoing actions"],
                    "Week 3": ["Writing real-time situations (descriptive)"],
                    "Week 4": ["Revision + Split Test"],
                },
                "February": {
                    "Week 1": ["Introduction to will, shall, going to"],
                    "Week 2": ["Predicting future events (spoken/written)"],
                    "Week 3": ["Making future plans and schedules"],
                    "Week 4": ["Revision + Split Test"],
                },
                "March": {
                    "Week 1": ["Practice turn-taking in guided conversations"],
                    "Week 2": ["Listen actively and respond thoughtfully"],
                    "Week 3": ["Use polite expressions and common phrases"],
                    "Week 4": ["Revision + Split Test"],
                },
            },
            "5months": {
                "July": {
                    "Week 1": ["Subject & predicate"],
                    "Week 2": ["Simple & compound sentences"],
                    "Week 3": ["Complex sentences + parts of speech"],
                    "Week 4": ["Revision + Split Test"],
                },
                "August": {
                    "Week 1": ["Follow multi-step instructions"],
                    "Week 2": ["Give/receive instructions"],
                    "Week 3": ["Use contractions & possessives"],
                    "Week 4": ["Revision + Split Test"],
                },
                "September": {
                    "Week 1": ["Apostrophes in contractions"],
                    "Week 2": ["Apostrophes in possession"],
                    "Week 3": ["Punctuation: basic to advanced"],
                    "Week 4": ["Revision + Split Test"],
                },
                "October": {
                    "Week 1": ["Past tense (regular/irregular)"],
                    "Week 2": ["Present tense (simple/continuous)"],
                    "Week 3": ["Future tense (will, going to)"],
                    "Week 4": ["Revision + Split Test"],
                },
                "November": {
                    "Week 1": ["Turn-taking in conversations"],
                    "Week 2": ["Active listening & response"],
                    "Week 3": ["Polite expressions & phrases"],
                    "Week 4": ["Revision + Split Test"],
                },
            },
        },
        "Story Level": {
            "9months": {
                "July": {
                    "Week 1": ["Understand common idiomatic expressions"],
                    "Week 2": [
                        "Recognize and interpret metaphors in conversations and texts"
                    ],
                    "Week 3": [
                        "Incorporate idioms and metaphors into speaking and writing"
                    ],
                    "Week 4": ["Revision + Split Tests"],
                },
                "August": {
                    "Week 1": ["Identify affirmative sentences"],
                    "Week 2": ["Identify negative sentences"],
                    "Week 3": ["Practice converting between affirmative and negative"],
                    "Week 4": ["Revision + Split Tests"],
                },
                "September": {
                    "Week 1": ["Write in past, present, and future tenses"],
                    "Week 2": ["Respond to prompts using correct tense"],
                    "Week 3": ["Develop cohesive paragraphs and short essays"],
                    "Week 4": ["Revision + Split Tests"],
                },
                "October": {
                    "Week 1": [
                        "Understand sentence types (exclamatory, declarative, etc.)"
                    ],
                    "Week 2": ["Practice voice modulation and expression"],
                    "Week 3": ["Convey emotion through tone and punctuation"],
                    "Week 4": ["Revision + Split Tests"],
                },
                "November": {
                    "Week 1": ["Identify elements of a story (beginning, middle, end)"],
                    "Week 2": ["Understand paragraph structure"],
                    "Week 3": ["Analyze sample paragraphs and short stories"],
                    "Week 4": ["Revision + Split Tests"],
                },
                "December": {
                    "Week 1": ["Generate ideas using prompts"],
                    "Week 2": ["Organize into coherent narrative"],
                    "Week 3": ["Develop characters, setting, and plot"],
                    "Week 4": ["Revision + Split Tests"],
                },
                "January": {
                    "Week 1": ["Plan and organize presentations"],
                    "Week 2": ["Practice articulation, pacing, confident delivery"],
                    "Week 3": ["Use visual aids and presentation tools"],
                    "Week 4": ["Revision + Split Tests"],
                },
                "February": {
                    "Week 1": ["Practice eye contact, body language, and nodding"],
                    "Week 2": ["Summarize and paraphrase peer input"],
                    "Week 3": ["Ask relevant questions and give feedback"],
                    "Week 4": ["Revision + Split Tests"],
                },
                "March": {
                    "Week 1": ["Combine idioms, tense, and paragraphing in writing"],
                    "Week 2": ["Storytelling with voice modulation and structure"],
                    "Week 3": ["Prepare a final presentation and story"],
                    "Week 4": ["Revision + Split Tests"],
                },
            },
            "5months": {
                "July": {
                    "Week 1": ["Learn common idioms"],
                    "Week 2": ["Understand and use metaphors"],
                    "Week 3": ["Identify affirmative & negative sentences"],
                    "Week 4": ["Revision + Split Tests"],
                },
                "August": {
                    "Week 1": ["Write in past, present, future tense"],
                    "Week 2": ["Use prompts with correct tense"],
                    "Week 3": ["Build short, clear paragraphs"],
                    "Week 4": ["Revision + Split Tests"],
                },
                "September": {
                    "Week 1": ["Practice tone for sentence types"],
                    "Week 2": ["Add emotion using voice and punctuation"],
                    "Week 3": ["Identify story structure (B-M-E)"],
                    "Week 4": ["Revision + Split Tests"],
                },
                "October": {
                    "Week 1": ["Use prompts to create story ideas"],
                    "Week 2": ["Build characters and plot"],
                    "Week 3": ["Present ideas with clarity and visuals"],
                    "Week 4": ["Revision + Split Tests"],
                },
                "November": {
                    "Week 1": ["Practice listening, eye contact, nodding"],
                    "Week 2": ["Summarize and ask questions"],
                    "Week 3": ["Apply all skills in writing & speaking"],
                    "Week 4": ["Revision + Final Split Test"],
                },
            },
        },
        "Advanced Level": {
            "9months": {
                "July": {
                    "Week 1": ["Definition and examples of idioms"],
                    "Week 2": ["Usage of idioms in sentences"],
                    "Week 3": [
                        "Definition and examples of metaphors; differentiate between similes and metaphors"
                    ],
                    "Week 4": ["Revision + Split Test"],
                },
                "August": {
                    "Week 1": ["Understanding affirmative sentences"],
                    "Week 2": ["Understanding negative sentences"],
                    "Week 3": ["Changing affirmative to negative and vice versa"],
                    "Week 4": ["Revision + Split Test"],
                },
                "September": {
                    "Week 1": ["Simple Present Tense"],
                    "Week 2": ["Present Continuous and Present Perfect"],
                    "Week 3": [
                        "Present Perfect Continuous + Writing prompts using present tense"
                    ],
                    "Week 4": ["Revision + Split Test"],
                },
                "October": {
                    "Week 1": ["Past Tense – Simple & Continuous"],
                    "Week 2": ["Past Perfect & Past Perfect Continuous"],
                    "Week 3": ["Future Tense – All Forms + Prompts"],
                    "Week 4": ["Revision + Split Test"],
                },
                "November": {
                    "Week 1": ["Declarative and Interrogative sentences"],
                    "Week 2": ["Imperative and Exclamatory sentences"],
                    "Week 3": ["Practicing tone, pauses, and pitch in speaking"],
                    "Week 4": ["Revision + Split Test"],
                },
                "December": {
                    "Week 1": ["Topic sentence and paragraph planning"],
                    "Week 2": ["Supporting details, Beginning-Middle-End"],
                    "Week 3": ["Character, setting, plot development"],
                    "Week 4": ["Revision + Split Test"],
                },
                "January": {
                    "Week 1": ["Creating a plot outline"],
                    "Week 2": ["Developing characters and settings"],
                    "Week 3": ["Writing coherent narratives"],
                    "Week 4": ["Revision + Split Test"],
                },
                "February": {
                    "Week 1": ["Organising content for presentations"],
                    "Week 2": ["Clear articulation & confident delivery"],
                    "Week 3": ["Using visual aids effectively"],
                    "Week 4": ["Revision + Split Test"],
                },
                "March": {
                    "Week 1": [
                        "Techniques for active listening (e.g., eye contact, nodding)"
                    ],
                    "Week 2": [
                        "Summarising, paraphrasing, and asking clarifying questions"
                    ],
                    "Week 3": ["Providing constructive feedback in discussions"],
                    "Week 4": ["Revision + Split Test"],
                },
            },
            "5months": {
                "July": {
                    "Week 1": ["Idioms – meaning & use"],
                    "Week 2": ["Metaphors vs Similes"],
                    "Week 3": ["Affirmative & Negative sentences"],
                    "Week 4": ["Revision + Split Test"],
                },
                "August": {
                    "Week 1": ["Present (all forms)"],
                    "Week 2": ["Past (all forms)"],
                    "Week 3": ["Future (all forms)"],
                    "Week 4": ["Revision + Split Test"],
                },
                "September": {
                    "Week 1": ["Sentence tones (4 types)"],
                    "Week 2": ["Topic & Supporting Sentences"],
                    "Week 3": ["Story parts (B-M-E, characters)"],
                    "Week 4": ["Revision + Split Test"],
                },
                "October": {
                    "Week 1": ["Plot outline"],
                    "Week 2": ["Characters & setting"],
                    "Week 3": ["Full short story"],
                    "Week 4": ["Revision + Split Test"],
                },
                "November": {
                    "Week 1": ["Presentation skills"],
                    "Week 2": ["Visuals & Delivery"],
                    "Week 3": ["Active listening & feedback"],
                    "Week 4": ["Revision + Split Test"],
                },
            },
        },
    },
    "Foundational Numeracy": {
        "Beginner Level": {
            "Grade LKG to 1": {
                "9months": {
                    "July": {
                        "Week 1": [
                            "Introduction to numbers 1-5 using fingers, charts, and real-life objects"
                        ],
                        "Week 2": [
                            "Numbers 6-10; practice tracing and writing numbers"
                        ],
                        "Week 3": [
                            "Matching numbers with quantities (e.g., 3 apples, 5 blocks)"
                        ],
                        "Week 4": [
                            "Revision + Split Test (1-10 recognition & quantity)"
                        ],
                    },
                    "August": {
                        "Week 1": [
                            "Counting daily objects (e.g., pencils, leaves, toys) up to 10"
                        ],
                        "Week 2": ["Counting using lines and finger patterns"],
                        "Week 3": [
                            "Introduction to simple number songs and games for 1-10"
                        ],
                        "Week 4": [
                            "Revision + Split Test (Counting + Number-object association)"
                        ],
                    },
                    "September": {
                        "Week 1": ["Identify and trace numbers 11-15"],
                        "Week 2": ["Identify and trace numbers 16-20"],
                        "Week 3": ["Match quantities with numbers 11-20"],
                        "Week 4": ["Revision + Split Test (11-20 recognition)"],
                    },
                    "October": {
                        "Week 1": [
                            "Introduction to Bundling (Bundle and stick method for 10s)"
                        ],
                        "Week 2": [
                            "Place value understanding: 10 = 1 ten, 11 = 1 ten + 1 unit"
                        ],
                        "Week 3": [
                            "Practice with number expansion (12 = 10 + 2, etc.)"
                        ],
                        "Week 4": ["Revision + Split Test (Place value till tens)"],
                    },
                    "November": {
                        "Week 1": ["Recognize and write numbers 21-30"],
                        "Week 2": ["Continue with 31-40"],
                        "Week 3": [
                            "Complete 41-50 and practice counting forward/backward"
                        ],
                        "Week 4": [
                            "Revision + Split Test (21-50 number identification + writing)"
                        ],
                    },
                    "December": {
                        "Week 1": ["Add numbers using fingers and objects (1-10)"],
                        "Week 2": ["Addition with number lines and visual aids"],
                        "Week 3": [
                            "Add double-digit numbers without carryover (10-20 range)"
                        ],
                        "Week 4": ["Revision + Split Test (Addition)"],
                    },
                    "January": {
                        "Week 1": [
                            "Subtraction using fingers, toys, and pictures (1-10)"
                        ],
                        "Week 2": ["Subtraction on number lines and cross-out method"],
                        "Week 3": ["Simple double-digit subtraction without borrowing"],
                        "Week 4": ["Revision + Split Test (Subtraction)"],
                    },
                    "February": {
                        "Week 1": [
                            "Introduction to basic shapes: Circle, square, triangle"
                        ],
                        "Week 2": [
                            "More shapes: Rectangle, oval; identify in environment"
                        ],
                        "Week 3": [
                            "Compare shapes + Count and add shapes (e.g., 2 squares + 3 circles)"
                        ],
                        "Week 4": [
                            "Revision + Split Test (Shapes + related operations)"
                        ],
                    },
                    "March": {
                        "Week 1": ["Recognize and write numbers 51-100"],
                        "Week 2": [
                            "Place value till hundreds (e.g., 125 = 100 + 20 + 5)"
                        ],
                        "Week 3": [
                            "Mixed practice: Add/Subtract + Shapes + Place Value"
                        ],
                        "Week 4": ["Final Revision + Split Test (All concepts)"],
                    },
                },
                "5months": {
                    "July": {
                        "Week 1": [
                            "Numbers 1-10 (read, write, count with fingers & objects)"
                        ],
                        "Week 2": ["Numbers 11-20 + quantity matching"],
                        "Week 3": ["Counting objects, fingers, lines up to 20"],
                        "Week 4": ["Revision + Split Test"],
                    },
                    "August": {
                        "Week 1": ["Numbers 21-40 (recognition + writing)"],
                        "Week 2": ["Numbers 41-50 + skip counting by 10s"],
                        "Week 3": ["Place value: units & tens + bundling sticks"],
                        "Week 4": ["Revision + Split Test"],
                    },
                    "September": {
                        "Week 1": ["Numbers 51-70"],
                        "Week 2": ["Numbers 71-100 + forward/backward counting"],
                        "Week 3": ["Place value till 100 (expand: 42 = 40 + 2)"],
                        "Week 4": ["Revision + Split Test"],
                    },
                    "October": {
                        "Week 1": ["Addition with fingers/objects (1-20)"],
                        "Week 2": ["Subtraction using real items & number lines"],
                        "Week 3": ["2-digit add/subtract without carry/borrow"],
                        "Week 4": ["Revision + Split Test"],
                    },
                    "November": {
                        "Week 1": [
                            "Basic shapes (circle, square, triangle, rectangle, oval)"
                        ],
                        "Week 2": ["Find shapes in environment + count shapes"],
                        "Week 3": ["Shape-based addition/subtraction"],
                        "Week 4": ["Final Revision + Cumulative Test"],
                    },
                },
            },
            "Grade 2 and 3": {
                "9months": {
                    "July": {
                        "Week 1": ["Identify and write 1–2 digit numbers"],
                        "Week 2": ["Identify and write 3-digit numbers"],
                        "Week 3": ["Odd and even numbers"],
                        "Week 4": [
                            "Revision + Split test (Writing & identifying numbers, odd/even)"
                        ],
                    },
                    "August": {
                        "Week 1": ["Place value till 100 using blocks/charts"],
                        "Week 2": ["Addition: single-digit + single-digit"],
                        "Week 3": ["Addition: single-digit + double-digit"],
                        "Week 4": ["Revision + Split test (Place value + Addition)"],
                    },
                    "September": {
                        "Week 1": ["Subtraction: single-digit – single-digit"],
                        "Week 2": ["Subtraction: double-digit – single-digit"],
                        "Week 3": ["Simple word problems: addition & subtraction"],
                        "Week 4": [
                            "Revision + Split test (Subtraction + word problems)"
                        ],
                    },
                    "October": {
                        "Week 1": ["Terms: sum, difference, total, left"],
                        "Week 2": ["Word problems from daily life (shopping, sharing)"],
                        "Week 3": ["Problem solving with correct operation (+/–)"],
                        "Week 4": ["Revision + Split test (Vocabulary + application)"],
                    },
                    "November": {
                        "Week 1": ["Table of 2"],
                        "Week 2": ["Table of 5"],
                        "Week 3": ["Table of 10"],
                        "Week 4": ["Revision + Split test (Tables 2, 5, 10)"],
                    },
                    "December": {
                        "Week 1": ["Multiply: single-digit × single-digit"],
                        "Week 2": ["Multiply: single-digit × double-digit"],
                        "Week 3": [
                            "Multiplication games & visual activities (arrays, cootie catcher)"
                        ],
                        "Week 4": ["Revision + Split test (Multiplication)"],
                    },
                    "January": {
                        "Week 1": [
                            "Basic 2D shapes: circle, triangle, square, rectangle"
                        ],
                        "Week 2": ["Patterns: Repeating & sequences"],
                        "Week 3": ["Arithmetic patterns: +2, +5, +10"],
                        "Week 4": ["Revision + Split test (Shapes & patterns)"],
                    },
                    "February": {
                        "Week 1": ["Comparisons: big/small, short/tall, heavy/light"],
                        "Week 2": ["Length: long/short, height"],
                        "Week 3": ["Quantity: more/less, many/few"],
                        "Week 4": ["Revision + Split test (Measurement terms)"],
                    },
                    "March": {
                        "Week 1": [
                            "Math games: hopscotch, bingo, kaboom, place value war"
                        ],
                        "Week 2": [
                            "Creative math activities: scavenger hunt, cootie catcher, puzzles"
                        ],
                        "Week 3": ["Mixed word problems (add, subtract, multiply)"],
                        "Week 4": ["Final Revision + Comprehensive Test"],
                    },
                },
                "5months": {
                    "July": {
                        "Week 1": ["Read & write numbers up to 999"],
                        "Week 2": ["Place value (units, tens, hundreds)"],
                        "Week 3": ["Odd/even, number comparison"],
                        "Week 4": ["Revision + Split test"],
                    },
                    "August": {
                        "Week 1": ["Addition: 1-digit + 2-digit"],
                        "Week 2": ["Subtraction: 2-digit – 1-digit"],
                        "Week 3": ["Simple word problems (add/sub)"],
                        "Week 4": ["Revision + Split test"],
                    },
                    "September": {
                        "Week 1": ["Tables of 2, 5, 10"],
                        "Week 2": ["Multiply: 1-digit × 1-digit"],
                        "Week 3": ["Multiply: 1-digit × 2-digit"],
                        "Week 4": ["Revision + Split test"],
                    },
                    "October": {
                        "Week 1": ["Real-life word problems"],
                        "Week 2": ["Terms: sum, difference, total, left"],
                        "Week 3": ["Choose correct operation (+, –, ×)"],
                        "Week 4": ["Revision + Split test"],
                    },
                    "November": {
                        "Week 1": ["Shapes: circle, square, triangle, rectangle"],
                        "Week 2": ["Patterns: repeat, number series"],
                        "Week 3": ["Measurement: size, weight, quantity"],
                        "Week 4": ["Final Revision + Full Test"],
                    },
                },
            },
            "Grade 4": {
                "9months": {
                    "July": {
                        "Week 1": [
                            "Read and write 2-digit numbers; identify ones and tens"
                        ],
                        "Week 2": [
                            "Extend to 3-digit numbers; identify ones, tens, hundreds"
                        ],
                        "Week 3": [
                            "Place value with blocks and expanded form (e.g., 456 = 400 + 50 + 6)"
                        ],
                        "Week 4": [
                            "Revision + split test (number reading, writing, place value)"
                        ],
                    },
                    "August": {
                        "Week 1": ["Count objects in 2s, 5s, 10s using daily items"],
                        "Week 2": [
                            "Place value puzzles (Which digit is in the 100s place?)"
                        ],
                        "Week 3": [
                            "Introduce number comparison (>, <, =) based on place value"
                        ],
                        "Week 4": [
                            "Revision + split test (counting, place value, comparisons)"
                        ],
                    },
                    "September": {
                        "Week 1": ["Add 2-digit numbers using fingers and lines"],
                        "Week 2": ["Add 3-digit numbers using blocks/visuals"],
                        "Week 3": [
                            "Apply addition in shop/play scenarios (e.g., pretend money)"
                        ],
                        "Week 4": [
                            "Revision + split test (addition with/without carry, real-life add)"
                        ],
                    },
                    "October": {
                        "Week 1": ["Subtract 2-digit numbers using counters/objects"],
                        "Week 2": ["Subtract 3-digit numbers using visual aids"],
                        "Week 3": [
                            "Role-play: return/change money practice (shopkeeper game)"
                        ],
                        "Week 4": [
                            "Revision + split test (subtraction with/without borrow, daily context)"
                        ],
                    },
                    "November": {
                        "Week 1": [
                            "Practice estimation (about how many items? Round off)"
                        ],
                        "Week 2": [
                            "Read numbers in words and write numerals (till 999)"
                        ],
                        "Week 3": [
                            "Create daily math journal (write numbers seen in surroundings)"
                        ],
                        "Week 4": [
                            "Revision + split test (reading, writing, estimating numbers)"
                        ],
                    },
                    "December": {
                        "Week 1": ["Simple 1-line word problems (addition only)"],
                        "Week 2": ["Subtraction-based direct word problems"],
                        "Week 3": ["Mixed addition-subtraction problems with keywords"],
                        "Week 4": ["Revision + split test (2 problems per operation)"],
                    },
                    "January": {
                        "Week 1": ["Identify basic shapes: square, rectangle, circle"],
                        "Week 2": [
                            "Triangle, oval; Match real-world items with shapes"
                        ],
                        "Week 3": ["Draw and label shapes; shape hunt in surroundings"],
                        "Week 4": [
                            "Revision + split test (shape recognition, matching, drawing)"
                        ],
                    },
                    "February": {
                        "Week 1": [
                            "'Build it' with place value blocks (random numbers)"
                        ],
                        "Week 2": ["Number train activity (ones → tens → hundreds)"],
                        "Week 3": [
                            "Number comparison + sequencing games (e.g., greater/lesser train)"
                        ],
                        "Week 4": [
                            "Revision + split test (place value build, compare, sequence)"
                        ],
                    },
                    "March": {
                        "Week 1": [
                            "Mixed review: addition, subtraction, number writing"
                        ],
                        "Week 2": ["Word problems + place value revision"],
                        "Week 3": [
                            "Games-based recap: shop & learn, number train, build it"
                        ],
                        "Week 4": [
                            "Final revision + split test (comprehensive: numbers, ops, shapes)"
                        ],
                    },
                },
                "5months": {
                    "July": {
                        "Week 1": ["Read/write 2- & 3-digit numbers"],
                        "Week 2": ["Place value: ones, tens, hundreds"],
                        "Week 3": ["Compare numbers using >, <, ="],
                        "Week 4": ["Revision + Split Test"],
                    },
                    "August": {
                        "Week 1": ["Count using objects, lines, fingers"],
                        "Week 2": ["Add 2- & 3-digit numbers (with/without carry)"],
                        "Week 3": [
                            "Subtract 2- & 3-digit numbers (with/without borrow)"
                        ],
                        "Week 4": ["Revision + Split Test"],
                    },
                    "September": {
                        "Week 1": ["Addition word problems"],
                        "Week 2": ["Subtraction word problems"],
                        "Week 3": ["Role-play: shop and change"],
                        "Week 4": ["Revision + Split Test"],
                    },
                    "October": {
                        "Week 1": ["Identify shapes: circle, square, triangle"],
                        "Week 2": ["Rectangle, oval + real-life shape match"],
                        "Week 3": ["Draw and label shapes"],
                        "Week 4": ["Revision + Split Test"],
                    },
                    "November": {
                        "Week 1": ["Read/write numbers + place value recap"],
                        "Week 2": ["Mixed operations + comparison"],
                        "Week 3": ["Word problems + shapes recap"],
                        "Week 4": ["Final Revision + Split Test"],
                    },
                },
            },
        },
        "M Level 1": {
            "Grade 2 and 3": {
                "9months": {
                    "July": {
                        "Week 1": ["Identify and write 1–2 digit numbers"],
                        "Week 2": ["Identify and write 3-digit numbers"],
                        "Week 3": ["Odd and even numbers"],
                        "Week 4": [
                            "Revision + Split test (Writing & identifying numbers, odd/even)"
                        ],
                    },
                    "August": {
                        "Week 1": ["Place value till 100 using blocks/charts"],
                        "Week 2": ["Addition: single-digit + single-digit"],
                        "Week 3": ["Addition: single-digit + double-digit"],
                        "Week 4": ["Revision + Split test (Place value + Addition)"],
                    },
                    "September": {
                        "Week 1": ["Subtraction: single-digit – single-digit"],
                        "Week 2": ["Subtraction: double-digit – single-digit"],
                        "Week 3": ["Simple word problems: addition & subtraction"],
                        "Week 4": [
                            "Revision + Split test (Subtraction + word problems)"
                        ],
                    },
                    "October": {
                        "Week 1": ["Terms: sum, difference, total, left"],
                        "Week 2": ["Word problems from daily life (shopping, sharing)"],
                        "Week 3": ["Problem solving with correct operation (+/–)"],
                        "Week 4": ["Revision + Split test (Vocabulary + application)"],
                    },
                    "November": {
                        "Week 1": ["Table of 2"],
                        "Week 2": ["Table of 5"],
                        "Week 3": ["Table of 10"],
                        "Week 4": ["Revision + Split test (Tables 2, 5, 10)"],
                    },
                    "December": {
                        "Week 1": ["Multiply: single-digit × single-digit"],
                        "Week 2": ["Multiply: single-digit × double-digit"],
                        "Week 3": [
                            "Multiplication games & visual activities (arrays, cootie catcher)"
                        ],
                        "Week 4": ["Revision + Split test (Multiplication)"],
                    },
                    "January": {
                        "Week 1": [
                            "Basic 2D shapes: circle, triangle, square, rectangle"
                        ],
                        "Week 2": ["Patterns: Repeating & sequences"],
                        "Week 3": ["Arithmetic patterns: +2, +5, +10"],
                        "Week 4": ["Revision + Split test (Shapes & patterns)"],
                    },
                    "February": {
                        "Week 1": ["Comparisons: big/small, short/tall, heavy/light"],
                        "Week 2": ["Length: long/short, height"],
                        "Week 3": ["Quantity: more/less, many/few"],
                        "Week 4": ["Revision + Split test (Measurement terms)"],
                    },
                    "March": {
                        "Week 1": [
                            "Math games: hopscotch, bingo, kaboom, place value war"
                        ],
                        "Week 2": [
                            "Creative math activities: scavenger hunt, cootie catcher, puzzles"
                        ],
                        "Week 3": ["Mixed word problems (add, subtract, multiply)"],
                        "Week 4": ["Final Revision + Comprehensive Test"],
                    },
                },
                "5months": {
                    "July": {
                        "Week 1": ["Read & write numbers up to 999"],
                        "Week 2": ["Place value (units, tens, hundreds)"],
                        "Week 3": ["Odd/even, number comparison"],
                        "Week 4": ["Revision + Split test"],
                    },
                    "August": {
                        "Week 1": ["Addition: 1-digit + 2-digit"],
                        "Week 2": ["Subtraction: 2-digit – 1-digit"],
                        "Week 3": ["Simple word problems (add/sub)"],
                        "Week 4": ["Revision + Split test"],
                    },
                    "September": {
                        "Week 1": ["Tables of 2, 5, 10"],
                        "Week 2": ["Multiply: 1-digit × 1-digit"],
                        "Week 3": ["Multiply: 1-digit × 2-digit"],
                        "Week 4": ["Revision + Split test"],
                    },
                    "October": {
                        "Week 1": ["Real-life word problems"],
                        "Week 2": ["Terms: sum, difference, total, left"],
                        "Week 3": ["Choose correct operation (+, –, ×)"],
                        "Week 4": ["Revision + Split test"],
                    },
                    "November": {
                        "Week 1": ["Shapes: circle, square, triangle, rectangle"],
                        "Week 2": ["Patterns: repeat, number series"],
                        "Week 3": ["Measurement: size, weight, quantity"],
                        "Week 4": ["Final Revision + Full Test"],
                    },
                },
            },
            "Grade 4 and above": {
                "9months": {
                    "July": {
                        "Week 1": ["Read and write 2-, 3- and 4-digit numbers"],
                        "Week 2": ["Place values till 9999; digit vs number"],
                        "Week 3": ["Identify and differentiate odd/even numbers"],
                        "Week 4": [
                            "Revision + Split Test (number sense & place value understanding)"
                        ],
                    },
                    "August": {
                        "Week 1": ["Add 2-digit + 2-digit numbers"],
                        "Week 2": ["Add 3-digit + 2-digit and 3-digit + 3-digit"],
                        "Week 3": ["Simple + word problems (school & home contexts)"],
                        "Week 4": [
                            "Revision + Split Test (additions: vertical, horizontal, word problems)"
                        ],
                    },
                    "September": {
                        "Week 1": ["Subtract 2-digit - 2-digit numbers"],
                        "Week 2": ["Subtract 3-digit - 2/3-digit"],
                        "Week 3": ["Apply subtraction in daily life problems"],
                        "Week 4": [
                            "Revision + Split Test (subtraction mastery & error-checking)"
                        ],
                    },
                    "October": {
                        "Week 1": ["Mixed operation sums"],
                        "Week 2": ["Add/Subtract in shopping, time, and measurement"],
                        "Week 3": ["Understand common mistakes in operations"],
                        "Week 4": ["Revision + Split Test (mixed + and - operations)"],
                    },
                    "November": {
                        "Week 1": ["Equal groups, repeated addition"],
                        "Week 2": ["Learn tables 2, 3, 4, 5, 10 with games"],
                        "Week 3": ["Simple multiplication sums"],
                        "Week 4": [
                            "Revision + Split Test (tables + single-digit multiplication)"
                        ],
                    },
                    "December": {
                        "Week 1": ["Single × Double (3 × 12, 4 × 13 type sums)"],
                        "Week 2": ["Multiplication in real life (money, objects)"],
                        "Week 3": ["Area models, number line jumps"],
                        "Week 4": [
                            "Revision + Split Test (practice and test application problems)"
                        ],
                    },
                    "January": {
                        "Week 1": ["What is Division? Concept of sharing, grouping"],
                        "Week 2": [
                            "Division Facts - Relate with multiplication; 6 ÷ 2 = 3"
                        ],
                        "Week 3": ["Basic real-life division (candies, items)"],
                        "Week 4": [
                            "Revision + Split Test (division problems + concepts)"
                        ],
                    },
                    "February": {
                        "Week 1": [
                            "Introduction to Fractions - Understand 1/2, 1/4 as equal sharing"
                        ],
                        "Week 2": ["Relate fractions to division visually"],
                        "Week 3": ["Concept of 0 in operations"],
                        "Week 4": [
                            "Revision + Split Test (fraction basics + understanding 0)"
                        ],
                    },
                    "March": {
                        "Week 1": ["Identify shapes, pattern rules (2,4,6...)"],
                        "Week 2": ["Compare lengths, weights, quantities"],
                        "Week 3": ["Number line, shopping, Roll & Race"],
                        "Week 4": [
                            "Final Revision + Cumulative Split Test (full review + concept mapping)"
                        ],
                    },
                },
                "5months": {
                    "July": {
                        "Week 1": ["4- and 5-digit number reading & writing"],
                        "Week 2": ["Place value up to 10,000 (standard & expanded)"],
                        "Week 3": ["Number comparison, sequencing"],
                        "Week 4": ["Revision + Split Test"],
                    },
                    "August": {
                        "Week 1": ["Addition without and with carry"],
                        "Week 2": ["Subtraction without and with borrow"],
                        "Week 3": ["Word problems (addition & subtraction)"],
                        "Week 4": ["Revision + Split Test"],
                    },
                    "September": {
                        "Week 1": ["Tables 1–12 (revision drills)"],
                        "Week 2": ["2-digit × 1/2-digit multiplication"],
                        "Week 3": ["Division using sharing, 2-digit ÷ 1-digit"],
                        "Week 4": ["Revision + Split Test"],
                    },
                    "October": {
                        "Week 1": ["Simple fractions (½, ⅓, ¼)"],
                        "Week 2": ["Word problems using +, –, ×, ÷"],
                        "Week 3": ["Role of zero in numbers and operations"],
                        "Week 4": ["Revision + Split Test"],
                    },
                    "November": {
                        "Week 1": ["2D/3D shapes and real-life examples"],
                        "Week 2": ["Repeating and number patterns"],
                        "Week 3": ["Size, weight, time, and comparison terms"],
                        "Week 4": ["Revision + Final Assessment"],
                    },
                },
            },
        },
        "M Level 2": {
            "Grade 2 and 3": {
                "9months": {
                    "July": {
                        "Week 1": [
                            "Revise writing/identifying 2-digit, 3-digit, and 4-digit numbers"
                        ],
                        "Week 2": [
                            "Odd & even numbers; Identify even/odd in 3-digit numbers"
                        ],
                        "Week 3": [
                            "Place value till thousands using number blocks & charts"
                        ],
                        "Week 4": [
                            "Revision + Split Test (Number identification, Place Value, Odd/Even)"
                        ],
                    },
                    "August": {
                        "Week 1": ["Revision: Add/Subtract 2-digit & 3-digit numbers"],
                        "Week 2": [
                            "Add/Subtract 4-digit numbers; focus on 0 in operations"
                        ],
                        "Week 3": [
                            "Word problems – Addition/Subtraction (direct, simple problems)"
                        ],
                        "Week 4": [
                            "Revision + Split Test (Add/Subtract concepts, word problems)"
                        ],
                    },
                    "September": {
                        "Week 1": [
                            "Tables 2, 5, 10 (revision) + learning tables up to 6"
                        ],
                        "Week 2": [
                            "Concept of multiplication, multiplication as repeated addition"
                        ],
                        "Week 3": [
                            "Multiply: single × single, single × double, double × double"
                        ],
                        "Week 4": [
                            "Revision + Split Test (Multiplication concepts + basic problems)"
                        ],
                    },
                    "October": {
                        "Week 1": ["Concept of division, division as equal sharing"],
                        "Week 2": ["Tables 7 to 12 + division using number lines"],
                        "Week 3": [
                            "Division: single ÷ single, double ÷ single, triple ÷ single"
                        ],
                        "Week 4": [
                            "Revision + Split Test (Division, Tables, Basic word problems)"
                        ],
                    },
                    "November": {
                        "Week 1": [
                            "Identify operations from word problems (+, -, ×, ÷)"
                        ],
                        "Week 2": ["Solve 2-step problems with mixed operations"],
                        "Week 3": ["Vocabulary: sum, difference, product, quotient"],
                        "Week 4": [
                            "Revision + Split Test (Mixed operations, Word problems)"
                        ],
                    },
                    "December": {
                        "Week 1": ["Identify shapes around us (2D & 3D)"],
                        "Week 2": [
                            "Repeating patterns, skip counting patterns (2s, 5s, 10s)"
                        ],
                        "Week 3": [
                            "Arithmetic patterns (like 2, 4, 6... and 5, 10, 15...)"
                        ],
                        "Week 4": ["Revision + Split Test (Shapes, Patterns)"],
                    },
                    "January": {
                        "Week 1": ["Compare objects: small vs big, short vs tall"],
                        "Week 2": ["Heavy vs light, more vs less, many vs few"],
                        "Week 3": [
                            "Measuring with non-standard units (paperclips, blocks)"
                        ],
                        "Week 4": ["Revision + Split Test (Measurement concepts)"],
                    },
                    "February": {
                        "Week 1": ["Read clocks to the hour and half-hour"],
                        "Week 2": ["Understand daily routines in time order"],
                        "Week 3": ["Time word problems (morning, afternoon, evening)"],
                        "Week 4": [
                            "Revision + Split Test (Time and application problems)"
                        ],
                    },
                    "March": {
                        "Week 1": ["Revisit tables, addition & subtraction"],
                        "Week 2": ["Revisit multiplication & division"],
                        "Week 3": ["Word problems integrating 2 or more operations"],
                        "Week 4": ["Comprehensive Revision + Final Split Test"],
                    },
                },
                "5months": {
                    "July": {
                        "Week 1": ["Revise 2/3/4-digit numbers"],
                        "Week 2": ["Odd & even numbers"],
                        "Week 3": ["Place value up to 1000"],
                        "Week 4": ["Revision + Split Test (Numbers & Place Value)"],
                    },
                    "August": {
                        "Week 1": ["Add/Subtract 2–4-digit numbers"],
                        "Week 2": ["Word problems (+ / -)"],
                        "Week 3": ["Use of 0, problem comprehension"],
                        "Week 4": ["Revision + Split Test (Add/Subtract)"],
                    },
                    "September": {
                        "Week 1": ["Tables 2 to 6"],
                        "Week 2": ["Multiply: 1×1, 1×2, 2×2"],
                        "Week 3": ["Divide: 2-digit ÷ 1-digit"],
                        "Week 4": ["Revision + Split Test (× / ÷ basics)"],
                    },
                    "October": {
                        "Week 1": ["Identify operations (+, -, ×, ÷)"],
                        "Week 2": ["Mixed operation problems"],
                        "Week 3": ["Terms: sum, product, etc."],
                        "Week 4": ["Revision + Split Test (Word problems)"],
                    },
                    "November": {
                        "Week 1": ["2D shapes, repeating patterns"],
                        "Week 2": ["Compare size, weight, length"],
                        "Week 3": ["Time: hour, half-hour"],
                        "Week 4": ["Final Revision + Split Test (All topics)"],
                    },
                },
            },
            "Grade 4 and above": {
                "9months": {
                    "July": {
                        "Week 1": [
                            "Introduction to 4- and 5-digit numbers, reading and writing"
                        ],
                        "Week 2": [
                            "Place value up to ten thousand (expanded & standard form)"
                        ],
                        "Week 3": [
                            "Number comparison, sequencing, identifying largest/smallest"
                        ],
                        "Week 4": [
                            "Revision + Split Test (Place value, reading numbers)"
                        ],
                    },
                    "August": {
                        "Week 1": ["Add & subtract 3-digit numbers (no regrouping)"],
                        "Week 2": [
                            "Add & subtract 4- and 5-digit numbers (with regrouping)"
                        ],
                        "Week 3": ["Word problems involving addition and subtraction"],
                        "Week 4": [
                            "Revision + Split Test (operations and comprehension)"
                        ],
                    },
                    "September": {
                        "Week 1": ["Revise tables 1–6 through games and drills"],
                        "Week 2": ["Multiplication with 1-digit × 2-digit numbers"],
                        "Week 3": ["Concept of multiplication, doubling, patterns"],
                        "Week 4": [
                            "Revision + Split Test (tables, multiplication basics)"
                        ],
                    },
                    "October": {
                        "Week 1": [
                            "Multiply 2-digit × 2-digit numbers (with and without carry)"
                        ],
                        "Week 2": ["Intro to division as sharing, using objects"],
                        "Week 3": [
                            "Division with small numbers, vocabulary (quotient, remainder)"
                        ],
                        "Week 4": [
                            "Revision + Split Test (multiplication and division)"
                        ],
                    },
                    "November": {
                        "Week 1": [
                            "Understanding ½, ⅓, ¼ using visuals (pizza, money)"
                        ],
                        "Week 2": [
                            "Functional role of zero in operations (e.g., 304 vs 340)"
                        ],
                        "Week 3": ["Word problems involving fractions and zero"],
                        "Week 4": ["Revision + Split Test (fractions, zero usage)"],
                    },
                    "December": {
                        "Week 1": [
                            "Understand keywords: sum, difference, product, quotient"
                        ],
                        "Week 2": ["Mixed operation problems from real-life scenarios"],
                        "Week 3": ["Focus on logic-based problems and reasoning"],
                        "Week 4": [
                            "Revision + Split Test (applied arithmetic, problem solving)"
                        ],
                    },
                    "January": {
                        "Week 1": [
                            "Identify 2D shapes around us (circle, square, triangle)"
                        ],
                        "Week 2": [
                            "Introduction to 3D solid shapes (cube, sphere, cylinder)"
                        ],
                        "Week 3": ["Matching shapes with real objects"],
                        "Week 4": [
                            "Revision + Split Test (shapes and geometry vocabulary)"
                        ],
                    },
                    "February": {
                        "Week 1": ["Identifying repeating patterns (ABAB, AABB, etc.)"],
                        "Week 2": ["Number patterns (skip counting, 2s, 5s, 10s)"],
                        "Week 3": ["Simple arithmetic patterns (e.g., 3, 6, 9…)"],
                        "Week 4": ["Revision + Split Test (patterns and logic)"],
                    },
                    "March": {
                        "Week 1": [
                            "Comparing lengths, weights, sizes (more/less, longer/shorter)"
                        ],
                        "Week 2": [
                            "Daily time reading (hour, half-hour); daily routine activities"
                        ],
                        "Week 3": [
                            "Vocabulary: heavy/light, long/short, tall/short, many/few"
                        ],
                        "Week 4": ["Revision + Final Assessment"],
                    },
                },
                "5months": {
                    "July": {
                        "Week 1": ["4- and 5-digit number reading & writing"],
                        "Week 2": ["Place value up to 10,000 (standard & expanded)"],
                        "Week 3": ["Number comparison, sequencing"],
                        "Week 4": ["Revision + Split Test"],
                    },
                    "August": {
                        "Week 1": ["Addition without and with carry"],
                        "Week 2": ["Subtraction without and with borrow"],
                        "Week 3": ["Word problems (addition & subtraction)"],
                        "Week 4": ["Revision + Split Test"],
                    },
                    "September": {
                        "Week 1": ["Tables 1–12 (revision drills)"],
                        "Week 2": ["2-digit × 1/2-digit multiplication"],
                        "Week 3": ["Division using sharing, 2-digit ÷ 1-digit"],
                        "Week 4": ["Revision + Split Test"],
                    },
                    "October": {
                        "Week 1": ["Simple fractions (½, ⅓, ¼)"],
                        "Week 2": ["Word problems using +, –, ×, ÷"],
                        "Week 3": ["Role of zero in numbers and operations"],
                        "Week 4": ["Revision + Split Test"],
                    },
                    "November": {
                        "Week 1": ["2D/3D shapes and real-life examples"],
                        "Week 2": ["Repeating and number patterns"],
                        "Week 3": ["Size, weight, time, and comparison terms"],
                        "Week 4": ["Revision + Final Assessment"],
                    },
                },
            },
        },
    },
}


def get_recommended_topics(
    program: str, level: str, duration: str, month: str, week: str, grade: str = None
) -> List[str]:
    """
    Get recommended topics for a specific combination of program, level, duration, month, and week.
    For Foundational Numeracy, also considers the grade parameter.
    """
    try:
        if program == "Foundational Numeracy" and grade:
            return recommended_topics[program][level][grade][duration][month][week]
        return recommended_topics[program][level][duration][month][week]
    except KeyError:
        return []

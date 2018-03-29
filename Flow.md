# DialogFlow conversation happy path

WELCOME
Bot: Hail and greeting! Verily, dost thou needst ye Contract of Insurance?

User: Yes, I would like life insurance.

LIFE
Bot: Forsooth! Our contract doth cover thine death in combat, consumption, and jousting.

Bot: Art thou a king, a lord, a knight, or a peasant? (how much cover, and level of income, assuming whole life cover)

User: King -> (Cover: 5m, Income: 400m, Education: professional_degree)
User: Lord -> (Cover: 2.5m, Income: 40m, Education: diploma_or_btech)
User: Knight -> (Cover: 100k, Income: 4m, Education: grade_12_matric)
User: Peasant / Maid / Squire / Stablehand (Education: grade_12_no_matric)

(Peasant) Bot: Ni! Thine life is not worth insuring! Begone!

GOTO PERSONAL INFORMATION

PERSONAL INFORMATION

Bot: Dost thou partake of healthy pipesmoke?

User: Yes / No

Bot: How many winters hast thou seen?

User: 18--63

Bot: What is thine sex?

User: Male / Female

(Female) Bot: Witch! Heretic! The Spanish Inquisition hast been alerted!

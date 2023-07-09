Feature: user starts randomazer

    Scenario: User1 starts randomazer
        Given User1 logs in as "4932843@gmail.com" and "GoodPassword10" and go to box page
        When User1 starts randomazer
        Then randomazer completed sucessfully
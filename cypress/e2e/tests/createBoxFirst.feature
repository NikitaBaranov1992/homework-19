Feature: user logins and create a box

    Scenario: User logs in and create a box sucessfully
        Given user is on secret santa login page
        When user logs in as "4932843@gmail.com" and "GoodPassword10" and creates a box
        Then a box is created

    Scenario: User1 create invite link
        Given user1 is on box
        When user1 inite new users
        Then users get invite link

    Scenario: approve as another user
        Given another user is on secret santa login page
        When another user logs in as "<login>" and "<password>" and create a card
        Then another user added as partipical
        Examples:
            | login               | password       |
            | 4932843+2@gmail.com | GoodPassword10 |
            | 4932843+3@gmail.com | GoodPassword10 |
            | 4932843+4@gmail.com | GoodPassword10 |


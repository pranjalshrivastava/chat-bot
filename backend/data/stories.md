## first time greet
* greet
  - utter_ask_name
* introduction
  - action_hello_world
  - utter_ask_how_doing
> check_asked_mood

## happy path 1
> check_asked_mood
* mood_great
  - utter_happy

## happy path 2
> check_asked_mood
* mood_great
  - utter_happy
* goodbye
  - utter_goodbye

## sad path 1
> check_asked_mood
* mood_unhappy
  - utter_ask_why_bad
* affirm
  - utter_happy

## sad path 2
> check_asked_mood
* mood_unhappy
  - utter_ask_why_bad
* deny
  - utter_goodbye

## sad path 3
> check_asked_mood
* mood_unhappy
  - utter_ask_why_bad
* deny
  - utter_goodbye

## say goodbye
* goodbye
  - utter_goodbye

## bot challenge
* bot_challenge
  - utter_iamabot

## insult
* insult
  - utter_respond_insult
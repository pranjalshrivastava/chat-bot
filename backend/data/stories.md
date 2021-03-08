## first time greet
* greet
  <!-- - slot{"hello_flag":"0"}
  - action_set_helloflag -->
  - utter_ask_feeling
> check_asked_mood

## Test Greet Track
* greet
  - slot{"mood_share_flag":"1"}
  - utter_handle_regreet

## regreet greet
* greet
  - slot{"hello_flag":"1"}
  - slot{"mood_share_flag":"0"}
  - utter_helloagain
> check_asked_mood

## first time greetfail1
* out_of_scope
 - action_get_scope_counter
 - utter_hmm 
 - action_sleep
 - utter_ask_feeling
> check_asked_mood

## first time greetfail2
* out_of_scope
 - action_get_scope_counter
 - utter_hmm 
 - action_sleep
 - utter_ask_feeling
* out_of_scope
 - action_get_scope_counter
 - utter_hmm 
 - action_sleep
 - utter_ask_feeling
> check_asked_mood

## first time greetfail3
* out_of_scope
 - action_get_scope_counter
 - utter_hmm 
 - action_sleep
 - utter_ask_feeling
* out_of_scope
 - action_get_scope_counter
 - slot{"scope_counter":3.0}
 - utter_goodbye


## greet and question
* greet_with_question
  - utter_iamgood
  - action_sleep
  - utter_ask_feeling
> check_asked_mood

## regreet after moodcheck
> check_asked_mood
* greet
  - slot{"hello_flag":"1"}
  - utter_helloagain
> check_asked_mood
 

## good mood positive panas affirmed chat
> check_asked_mood
* mood_great
  - action_get_panas_score
  - slot{"panas_score" : "1"}
  - utter_happy_offer_chat
* affirm
  <!-- - utter_tell_me_happy -->
  ##Pranjal added
  - utter_ask_emotion_intensity
* share_problems
  - utter_ask_emotion_bother
* share_problems
  - utter_ask_emotion_impact
* share_problems
  - utter_thanks_for_answering
> check_venting_group

##commented by Pranjal
<!--## good mood positive panas affirmed chat
> check_asked_mood
* mood_great
  - action_get_panas_score
  - slot{"panas_score" : "1"}
  - utter_happy_offer_chat
> check_venting_group -->

## good mood positive panas denied chat
> check_asked_mood
* mood_great
  - action_get_panas_score
  - slot{"panas_score" : "1"}
  - utter_happy_offer_chat
* deny
  - utter_denied_chat
> check_non-venting_group

## good mood negative panas not bad anymore affirmed chat
> check_asked_mood
* mood_great
  - action_get_panas_score
  - slot{"panas_score" : "0"}
  - utter_negative_panas
* deny
  - utter_happy_offer_chat
* affirm
  <!-- - utter_tell_me_happy -->
  - utter_ask_emotion_intensity
* share_problems
  - utter_ask_emotion_bother
* share_problems
  - utter_ask_emotion_impact
* share_problems
  - utter_thanks_for_answering
> check_venting_group

##commented by Pranjal
<!--## good mood negative panas not bad anymore affirmed chat
> check_asked_mood
* mood_great
  - action_get_panas_score
  - slot{"panas_score" : "0"}
  - utter_negative_panas
* deny
  - utter_happy_offer_chat
> check_venting_group -->

## good mood negative panas not bad anymore denied chat
> check_asked_mood
* mood_great
  - action_get_panas_score
  - slot{"panas_score" : "0"}
  - utter_negative_panas
* deny
  - utter_happy_offer_chat
* deny
  - utter_denied_chat
  - action_skip_to_activity
> check_non-venting_group

## good mood negative panas still bad affirmed
## Anu_2/28/2021
> check_asked_mood
* mood_great
  - action_get_panas_score
  - slot{"panas_score" : "0"}
  - utter_negative_panas
* affirm
  - utter_ask_why_bad
* affirm
  - utter_ask_emotion_intensity
* share_problems
  - utter_ask_emotion_bother
* share_problems
  - utter_ask_emotion_impact
* share_problems
  - utter_thanks_for_answering
> check_venting_group

## commented by Pranjal
<!--## good mood negative panas still bad affirmed
> check_asked_mood
* mood_great
  - action_get_panas_score
  - slot{"panas_score" : "0"}
  - utter_negative_panas
* affirm
  - utter_ask_why_bad
> check_venting_group -->

## good mood negative panas still bad denied skip to the activity
> check_asked_mood
* mood_great
  - action_get_panas_score
  - slot{"panas_score" : "0"}
  - utter_negative_panas
* affirm
  - utter_ask_why_bad
* deny
  - utter_denied_why_bad
* skip_to_activity
  - utter_skip_to_activity
> check_non-venting_group

## good mood negative panas still bad denied tell more
> check_asked_mood
* mood_great
  - action_get_panas_score
  - slot{"panas_score" : "0"}
  - utter_negative_panas
* affirm
  - utter_ask_why_bad
* deny
  - utter_denied_why_bad
* tell_more
  - utter_ask_emotion_intensity
* share_problems
  - utter_ask_emotion_bother
* share_problems
  - utter_ask_emotion_impact
* share_problems
  - utter_thanks_for_answering
> check_venting_group

<!-- ## good mood negative panas still bad denied tell more
> check_asked_mood
* mood_great
  - action_get_panas_score
  - slot{"panas_score" : "0"}
  - utter_negative_panas
* affirm
  - utter_ask_why_bad
* deny
  - utter_denied_why_bad
> check_venting_group -->

## bad mood denied skip to activity
> check_asked_mood
* mood_unhappy
  - slot{"mood_share_flag":"0"}
  - utter_ask_why_bad
  - action_set_moodshareflag
* deny
  - utter_denied_chat
  - utter_skip_to_activity
  - action_skip_to_activity
> check_non-venting_group

## bad mood denied tell more
> check_asked_mood
* mood_unhappy
  - slot{"mood_share_flag":"0"}
  - utter_ask_why_bad
  - action_set_moodshareflag
* deny
  - utter_denied_why_bad
* tell_more
  <!-- - utter_tell_me_sad -->
  - utter_ask_emotion_intensity
* share_problems
  - utter_ask_emotion_bother
  * share_problems
  - utter_ask_emotion_impact
  * share_problems
  - utter_thanks_for_answering
> check_venting_group

## bad mood denied tell more
> check_asked_mood
* mood_unhappy
  - slot{"mood_share_flag":"0"}
  - utter_ask_why_bad
  - action_set_moodshareflag
* deny
  - utter_denied_why_bad
> check_venting_group

## bad mood affirmed
> check_asked_mood
* mood_unhappy
  - slot{"mood_share_flag":"0"}
  - utter_ask_why_bad
  - action_set_moodshareflag
* affirm
  - utter_ask_emotion_intensity
* share_problems
  - utter_ask_emotion_bother
* share_problems
  - utter_ask_emotion_impact
* share_problems
  - utter_thanks_for_answering
  <!-- - utter_tell_me_sad -->
> check_venting_group

## bad mood affirmed
> check_asked_mood
* mood_unhappy
  - slot{"mood_share_flag":"0"}
  - utter_ask_why_bad
  - action_set_moodshareflag
> check_venting_group

## yes affirmed
* affirm
 - slot{"mood_share_flag":"1"}
 - utter_check
## venting group
> check_venting_group
* share_problems
  - severity_form_with_buttons
  - form{"name": "severity_form_with_buttons"}
  - form{"name": null}

<!-- ## venting group
> check_venting_group
* share_problems{"sentiment" : "low"}
  - utter_low_severity

## venting group
> check_venting_group
* share_problems{"sentiment" : "moderate"}
  - utter_moderate_severity

## venting group
> check_venting_group
* share_problems{"sentiment" : "high"}
  - utter_high_severity -->

## say goodbye
* goodbye
  - utter_goodbye

## bot challenge
* bot_challenge
  - utter_iamabot

## insult
* insult
  - utter_respond_insult

<!-- ## fallback story
* out_of_scope
  - action_default_ask_rephrase -->


# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/core/actions/#custom-actions/


# This is a simple example for a custom action which utters "Hello World!"

from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.events import UserUtteranceReverted, SlotSet
import requests
import json
import socket
host_name = socket.gethostname() 
host_ip = socket.gethostbyname(host_name) 

class ActionGreetUser(Action):

    def name(self) -> Text:
        return "action_greet_user"

    def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        dispatcher.utter_template("utter_greet", tracker)

        return [UserUtteranceReverted()]


class GetPanasScore(Action):

    def name(self) -> Text:
        return "action_get_panas_score"

    def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        PATH = "http://" + host_ip + "/panas-score"
        data = requests.get(url=PATH).json()
        if data:
            score = data["score"]
            if score == "1":
                dispatcher.utter_message("Your Panas score is positive!")
            if score == "0":
                dispatcher.utter_message("Your Panas score is negative!")
            return [SlotSet("panas_score", score)]
        else:
            return [SlotSet("panas_score", "no score")]
        
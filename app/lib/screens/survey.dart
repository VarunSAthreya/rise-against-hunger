import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

import '../models/survey.dart';
import '../widgets/survey_dropdown.dart';
import '../widgets/survey_textfiled.dart';
import 'maps.dart';

class SurveyPage extends HookWidget {
  static const routeName = '/survey';
  const SurveyPage({Key? key}) : super(key: key);

  Hero _title(BuildContext context) {
    return Hero(
      tag: 'Survey',
      child: SizedBox(
        height: 50,
        child: DefaultTextStyle(
          style: TextStyle(
            fontSize: 35,
            color: Theme.of(context).colorScheme.secondary,
            fontWeight: FontWeight.bold,
            shadows: [
              Shadow(
                blurRadius: 7.0,
                color: Theme.of(context).primaryColor,
                offset: const Offset(0, 0),
              ),
            ],
          ),
          child: AnimatedTextKit(
            repeatForever: true,
            animatedTexts: [
              FlickerAnimatedText('Survey'),
              FlickerAnimatedText('Survey'),
              FlickerAnimatedText('Survey'),
            ],
            onTap: () {
              debugPrint("Tap Event");
            },
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final _adults = useState<int>(0);
    final _children = useState<int>(0);
    final _male = useState<int>(0);
    final _female = useState<int>(0);
    final _food = useState<int>(0);
    final _situation = useState<String>('Select Situation');

    return Scaffold(
      body: GestureDetector(
        onTap: () => FocusScope.of(context).unfocus(),
        child: Container(
          alignment: Alignment.center,
          width: double.infinity,
          height: double.infinity,
          color: Theme.of(context).colorScheme.secondary,
          child: SingleChildScrollView(
            child: Padding(
              padding: const EdgeInsets.all(20),
              child: Container(
                width: double.infinity,
                decoration: BoxDecoration(
                  color: Theme.of(context).backgroundColor,
                  borderRadius: BorderRadius.circular(15),
                ),
                child: Padding(
                  padding: const EdgeInsets.all(25.0),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      _title(context),
                      SurveyTextField(
                        labelText: 'Adilts',
                        title: 'Enter Number of Adults: ',
                        keyboardType: TextInputType.number,
                        onChanged: (str) => _adults.value = int.parse(str),
                      ),
                      const SizedBox(height: 20),
                      SurveyTextField(
                        labelText: 'Children',
                        title: 'Enter Number of Children: ',
                        keyboardType: TextInputType.number,
                        onChanged: (str) => _children.value = int.parse(str),
                      ),
                      const SizedBox(height: 20),
                      SurveyTextField(
                        labelText: 'Male',
                        title: 'Enter Number of Males: ',
                        keyboardType: TextInputType.number,
                        onChanged: (str) => _male.value = int.parse(str),
                      ),
                      const SizedBox(height: 20),
                      SurveyTextField(
                        labelText: 'Female',
                        title: 'Enter Number of Female: ',
                        keyboardType: TextInputType.number,
                        onChanged: (str) => _female.value = int.parse(str),
                      ),
                      const SizedBox(height: 20),
                      SurveyTextField(
                        labelText: 'Food',
                        title: 'Enter Number of Food Packets: ',
                        keyboardType: TextInputType.number,
                        onChanged: (str) => _food.value = int.parse(str),
                      ),
                      const SizedBox(height: 20),
                      SurveyDropDown(
                        title: 'Situation',
                        value: _situation.value,
                        list: const ['Good', 'Normal', 'Severe'],
                        onChanged: (str) => _situation.value = str,
                      ),
                      const SizedBox(height: 20),
                      GestureDetector(
                        onTap: () {
                          Navigator.pushReplacement(
                            context,
                            MaterialPageRoute<MapsLocation>(
                              builder: (context) => MapsLocation(
                                survey: Survey(
                                  adult: _adults.value,
                                  children: _children.value,
                                  situation: _situation.value,
                                  female: _female.value,
                                  requiredFood: _food.value,
                                  male: _male.value,
                                ),
                                isSurvey: true,
                              ),
                            ),
                          );
                        },
                        child: Container(
                          padding: const EdgeInsets.symmetric(
                            vertical: 10,
                            horizontal: 80,
                          ),
                          decoration: BoxDecoration(
                            color: Theme.of(context).colorScheme.secondary,
                            borderRadius: BorderRadius.circular(10),
                          ),
                          child: Text(
                            'Select Location',
                            textScaleFactor: 1.5,
                            style: TextStyle(
                              color: Theme.of(context).primaryColor,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}

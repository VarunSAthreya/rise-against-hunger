import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:cicadahack/models/donate.dart';
import 'package:cicadahack/widgets/survey_textfiled.dart';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

import 'maps.dart';

class DonatePage extends HookWidget {
  static const routeName = '/donate';
  const DonatePage({Key? key}) : super(key: key);

  Hero _title(BuildContext context) {
    return Hero(
      tag: 'Donate',
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
              FlickerAnimatedText('Donate'),
              FlickerAnimatedText('Donate'),
              FlickerAnimatedText('Donate'),
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
    final _name = useState<String>('');
    final _number = useState<String>('');
    final _people = useState<int>(0);

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
                        labelText: 'Name',
                        title: 'Enter Name: ',
                        onChanged: (str) => _name.value = str,
                      ),
                      const SizedBox(height: 20),
                      SurveyTextField(
                        labelText: 'Phone Number',
                        title: 'Enter Phone Number',
                        keyboardType: TextInputType.number,
                        onChanged: (str) => _number.value = str,
                      ),
                      const SizedBox(height: 20),
                      SurveyTextField(
                        labelText: 'People',
                        title: 'Enter Number of People you can feed',
                        keyboardType: TextInputType.number,
                        onChanged: (str) => _people.value = int.parse(str),
                      ),
                      const SizedBox(height: 20),
                      GestureDetector(
                        onTap: () {
                          Navigator.pushReplacement(
                            context,
                            MaterialPageRoute<MapsLocation>(
                              builder: (context) => MapsLocation(
                                donate: Donate(
                                  people: _people.value,
                                  name: _name.value,
                                  phnumber: _number.value,
                                ),
                                isSurvey: false,
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

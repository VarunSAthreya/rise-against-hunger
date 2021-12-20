import 'package:flutter/material.dart';

class SurveyDropDown extends StatelessWidget {
  const SurveyDropDown({
    Key? key,
    required this.title,
    required this.list,
    required this.value,
    required this.onChanged,
  }) : super(key: key);

  final Function? onChanged;
  final String title;
  final String value;
  final List<String> list;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20.0),
      ),
      child: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              title,
              textScaleFactor: 1.5,
              style: TextStyle(
                color: Theme.of(context).colorScheme.secondary.withOpacity(0.7),
              ),
            ),
            const SizedBox(
              height: 10,
            ),
            DropdownButton<String>(
              hint: Text(
                value,
                style: TextStyle(
                  color: Theme.of(context).colorScheme.secondary,
                ),
              ),
              items: list.map(
                (String value) {
                  return DropdownMenuItem<String>(
                    value: value,
                    child: Text(
                      value,
                      style: TextStyle(
                        color: Theme.of(context).colorScheme.secondary,
                      ),
                    ),
                  );
                },
              ).toList(),
              onChanged: (val) {
                FocusScope.of(context).unfocus();
                onChanged!(val);
              },
            )
          ],
        ),
      ),
    );
  }
}

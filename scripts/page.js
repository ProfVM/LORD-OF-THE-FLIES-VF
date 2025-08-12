//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.1.9
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================

var allInitQuestionFunctions = new Array (
    InitQuestion1,
    InitQuestion2,
    InitQuestion3,
    InitQuestion4,
    InitQuestion5,
    InitQuestion6,
    InitQuestion7,
    InitQuestion8,
    InitQuestion9,
    InitQuestion10,
    InitQuestion11,
    InitQuestion12,
    InitQuestion13,
    InitQuestion14,
    InitQuestion15,
    InitQuestion16,
    InitQuestion17,
    InitQuestion18,
    InitQuestion19,
    InitQuestion20,
    InitQuestion21,
    InitQuestion22,
    InitQuestion23,
    InitQuestion24,
    InitQuestion25,
    InitQuestion26,
    InitQuestion27,
    InitQuestion28,
    InitQuestion29,
    InitQuestion30,
    InitQuestion31,
    InitQuestion32,
    InitQuestion33,
    InitQuestion34,
    InitQuestion35,
    InitQuestion36,
    InitQuestion37,
    InitQuestion38,
    InitQuestion39,
    InitQuestion40,
    InitQuestion41,
    InitQuestion42,
    InitQuestion43,
    InitQuestion44,
    InitQuestion45,
    InitQuestion46,
    InitQuestion47,
    InitQuestion48,
    InitQuestion49,
    InitQuestion50,
    InitQuestion51,
    InitQuestion52,
);



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	
});

$(window).on("beforeunload", function ()
{
	PageUnload();
	window.scrollTo(0, 0);
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion1()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 0;
    var weight = DecodeNumber('qfN6D0tIbHU=', 259, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('qfN6D0tIbHU=', 259, -1000, 1000),DecodeDecimal('/D+CSaBE3Sk=', 259, -1000, 1000),DecodeDecimal('/D+CSaBE3Sk=', 259, -1000, 1000));
    question.answers.length = 0;
    question.num = 1;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who is elected chief by the boys?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qfN6D0tIbHU=', 261, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('/D+CSaBE3Sk=', 259, -9999, 99999), DecodeNumber('/D+CSaBE3Sk=', 259, -9999, 99999), '');
    answer1.shortTextAnswer = "Jack";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1tQkeyFwWkc=', 263, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('z3iSrkc8N1g=', 261, -9999, 99999), DecodeNumber('Hp+IxIrf9u4=', 261, -9999, 99999), '');
    answer2.shortTextAnswer = "Ralph";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1tQkeyFwWkc=', 265, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('87i655rJ+rI=', 263, -9999, 99999), DecodeNumber('87i655rJ+rI=', 263, -9999, 99999), '');
    answer3.shortTextAnswer = "Piggy";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('FRwEeCJVgH8=', 267, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('O3nGT267+rg=', 265, -9999, 99999), DecodeNumber('O3nGT267+rg=', 265, -9999, 99999), '');
    answer4.shortTextAnswer = "Simon";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 1;
    var weight = DecodeNumber('2clyo3K1ntg=', 269, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('2clyo3K1ntg=', 269, -1000, 1000),DecodeDecimal('x0dmM506FD8=', 269, -1000, 1000),DecodeDecimal('x0dmM506FD8=', 269, -1000, 1000));
    question.answers.length = 0;
    question.num = 2;
    question.isSingleAns = false;
    question.shortTextQuestion = "What do the boys use the conch shell for?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Jl33wRuKUAY=', 271, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('l7BTIj9q0i8=', 269, -9999, 99999), DecodeNumber('x0dmM506FD8=', 269, -9999, 99999), '');
    answer1.shortTextAnswer = "Blowing signals";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Jl33wRuKUAY=', 273, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('QrDP23EfuIw=', 271, -9999, 99999), DecodeNumber('QrDP23EfuIw=', 271, -9999, 99999), '');
    answer2.shortTextAnswer = "Cooking";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('J5sQl+K9p4o=', 275, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('zeq4NCCXFjE=', 273, -9999, 99999), DecodeNumber('zeq4NCCXFjE=', 273, -9999, 99999), '');
    answer3.shortTextAnswer = "Decoration";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('kSTzD54HYig=', 277, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('25OoJY/liM0=', 275, -9999, 99999), DecodeNumber('25OoJY/liM0=', 275, -9999, 99999), '');
    answer4.shortTextAnswer = "Collecting water";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 2;
    var weight = DecodeNumber('Dv8WkGko8bs=', 279, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Dv8WkGko8bs=', 279, -1000, 1000),DecodeDecimal('yZtdyKkufBU=', 279, -1000, 1000),DecodeDecimal('yZtdyKkufBU=', 279, -1000, 1000));
    question.answers.length = 0;
    question.num = 3;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is Ralph?s father?s occupation?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Dv8WkGko8bs=', 281, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('yZtdyKkufBU=', 279, -9999, 99999), DecodeNumber('yZtdyKkufBU=', 279, -9999, 99999), '');
    answer1.shortTextAnswer = "Sailor";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XjKyrxVvyg4=', 283, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('xE+tIFMbV9Y=', 281, -9999, 99999), DecodeNumber('+F9Hg98d4cE=', 281, -9999, 99999), '');
    answer2.shortTextAnswer = "Naval officer";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('XjKyrxVvyg4=', 285, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Up6tUiUoKKU=', 283, -9999, 99999), DecodeNumber('Up6tUiUoKKU=', 283, -9999, 99999), '');
    answer3.shortTextAnswer = "Pilot";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('rl1q2scuusk=', 287, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('l6wWL/g9ovM=', 285, -9999, 99999), DecodeNumber('l6wWL/g9ovM=', 285, -9999, 99999), '');
    answer4.shortTextAnswer = "Army captain";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 3;
    var weight = DecodeNumber('40nLtTWsJyU=', 126, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('40nLtTWsJyU=', 126, -1000, 1000),DecodeDecimal('le2z1ulIRzA=', 126, -1000, 1000),DecodeDecimal('le2z1ulIRzA=', 126, -1000, 1000));
    question.answers.length = 0;
    question.num = 4;
    question.isSingleAns = false;
    question.shortTextQuestion = "Which of the following best describes Jack?s first reaction to leadership loss?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('40nLtTWsJyU=', 128, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('le2z1ulIRzA=', 126, -9999, 99999), DecodeNumber('le2z1ulIRzA=', 126, -9999, 99999), '');
    answer1.shortTextAnswer = "He storms off";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/sGV8OLSQ2s=', 130, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('VTbFNSU+3CM=', 128, -9999, 99999), DecodeNumber('VTbFNSU+3CM=', 128, -9999, 99999), '');
    answer2.shortTextAnswer = "He cries";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('r+qiQiaaM0E=', 132, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('HgWpJ5p83MM=', 130, -9999, 99999), DecodeNumber('HgWpJ5p83MM=', 130, -9999, 99999), '');
    answer3.shortTextAnswer = "He attacks Ralph";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MdnjbFv8p6I=', 134, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('gWs5loYI1r4=', 132, -9999, 99999), DecodeNumber('3Y0XmfgkMro=', 132, -9999, 99999), '');
    answer4.shortTextAnswer = "He reluctantly accepts it";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 4;
    var weight = DecodeNumber('X08T4D9PfdM=', 136, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('X08T4D9PfdM=', 136, -1000, 1000),DecodeDecimal('hz0lOXs8Keg=', 136, -1000, 1000),DecodeDecimal('hz0lOXs8Keg=', 136, -1000, 1000));
    question.answers.length = 0;
    question.num = 5;
    question.isSingleAns = false;
    question.shortTextQuestion = "Why is the conch important?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('X08T4D9PfdM=', 138, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('hz0lOXs8Keg=', 136, -9999, 99999), DecodeNumber('hz0lOXs8Keg=', 136, -9999, 99999), '');
    answer1.shortTextAnswer = "It can make fire";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xujfPvIK2UA=', 140, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('LTXfERipgjM=', 138, -9999, 99999), DecodeNumber('LTXfERipgjM=', 138, -9999, 99999), '');
    answer2.shortTextAnswer = "It belongs to Piggy";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('M7FTgXa2Egg=', 142, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('HtFPL1uGf50=', 140, -9999, 99999), DecodeNumber('HtFPL1uGf50=', 140, -9999, 99999), '');
    answer3.shortTextAnswer = "It was given by Ralph?s father";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('/j2dnyTEVGE=', 144, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('2eaUjl5bZdM=', 142, -9999, 99999), DecodeNumber('hBoxwtOEKiI=', 142, -9999, 99999), '');
    answer4.shortTextAnswer = "It symbolizes leadership and order";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 5;
    var weight = DecodeNumber('cip+NTUA/OE=', 146, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('cip+NTUA/OE=', 146, -1000, 1000),DecodeDecimal('FmO5rUdEMK8=', 146, -1000, 1000),DecodeDecimal('FmO5rUdEMK8=', 146, -1000, 1000));
    question.answers.length = 0;
    question.num = 6;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who is left with Ralph and Piggy after Simon?s death?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('cip+NTUA/OE=', 148, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('FmO5rUdEMK8=', 146, -9999, 99999), DecodeNumber('FmO5rUdEMK8=', 146, -9999, 99999), '');
    answer1.shortTextAnswer = "Jack and his followers";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RMkLFpPU83w=', 150, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('pK+l4I4ZXJE=', 148, -9999, 99999), DecodeNumber('pK+l4I4ZXJE=', 148, -9999, 99999), '');
    answer2.shortTextAnswer = "Only Piggy";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('UIxXo1CfLaM=', 152, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('15TCIMQQhuY=', 150, -9999, 99999), DecodeNumber('15TCIMQQhuY=', 150, -9999, 99999), '');
    answer3.shortTextAnswer = "No one; they are abandoned";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('zTSi813emGY=', 154, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('5RD8yITz4rU=', 152, -9999, 99999), DecodeNumber('JEjV4/52rlY=', 152, -9999, 99999), '');
    answer4.shortTextAnswer = "Samneric";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion7()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 6;
    var weight = DecodeNumber('j1c4S8hFnLc=', 156, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('j1c4S8hFnLc=', 156, -1000, 1000),DecodeDecimal('UJh/xEwcDRk=', 156, -1000, 1000),DecodeDecimal('UJh/xEwcDRk=', 156, -1000, 1000));
    question.answers.length = 0;
    question.num = 7;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is Ralph?s main concern after the death of Simon?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('j1c4S8hFnLc=', 158, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('UJh/xEwcDRk=', 156, -9999, 99999), DecodeNumber('UJh/xEwcDRk=', 156, -9999, 99999), '');
    answer1.shortTextAnswer = "To get back to civilization";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vXxKtM2GmLc=', 160, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('yleyA7Y+TrE=', 158, -9999, 99999), DecodeNumber('yleyA7Y+TrE=', 158, -9999, 99999), '');
    answer2.shortTextAnswer = "To get revenge on Jack";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/VOk+G0h2fg=', 162, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('naU7ZV/k61I=', 160, -9999, 99999), DecodeNumber('naU7ZV/k61I=', 160, -9999, 99999), '');
    answer3.shortTextAnswer = "To rebuild the huts";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('S63Q+AY7YdU=', 164, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('svCk7FZiBH4=', 162, -9999, 99999), DecodeNumber('EyU1TzwxYg4=', 162, -9999, 99999), '');
    answer4.shortTextAnswer = "To keep the fire burning";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion8()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 7;
    var weight = DecodeNumber('Qujikts/V4o=', 166, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Qujikts/V4o=', 166, -1000, 1000),DecodeDecimal('sjsW9sYEU0Y=', 166, -1000, 1000),DecodeDecimal('sjsW9sYEU0Y=', 166, -1000, 1000));
    question.answers.length = 0;
    question.num = 8;
    question.isSingleAns = false;
    question.shortTextQuestion = "What action does Jack take after stealing Piggy?s glasses?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Qujikts/V4o=', 168, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('sjsW9sYEU0Y=', 166, -9999, 99999), DecodeNumber('sjsW9sYEU0Y=', 166, -9999, 99999), '');
    answer1.shortTextAnswer = "He destroys the glasses";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('coDcl0WbeH4=', 170, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('YeVlX/xzuHs=', 168, -9999, 99999), DecodeNumber('YeVlX/xzuHs=', 168, -9999, 99999), '');
    answer2.shortTextAnswer = "He gives them back to Piggy";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('GnwMdmZYalg=', 172, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('87nAsJEtLiQ=', 170, -9999, 99999), DecodeNumber('87nAsJEtLiQ=', 170, -9999, 99999), '');
    answer3.shortTextAnswer = "He holds them ransom";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('yfYNkFLfg9s=', 174, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('Jl33wRuKUAY=', 172, -9999, 99999), DecodeNumber('wqS6v8FA4IQ=', 172, -9999, 99999), '');
    answer4.shortTextAnswer = "He uses them to start a new fire";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion9()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 8;
    var weight = DecodeNumber('mI60agTMjy8=', 176, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mI60agTMjy8=', 176, -1000, 1000),DecodeDecimal('WKYEhnW+YNY=', 176, -1000, 1000),DecodeDecimal('WKYEhnW+YNY=', 176, -1000, 1000));
    question.answers.length = 0;
    question.num = 9;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Ralph say about the group?s behavior in this chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('mI60agTMjy8=', 178, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('WKYEhnW+YNY=', 176, -9999, 99999), DecodeNumber('WKYEhnW+YNY=', 176, -9999, 99999), '');
    answer1.shortTextAnswer = "They are still a civilized group of boys";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('x9htbaOLuGI=', 180, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('JrN/azd2SR8=', 178, -9999, 99999), DecodeNumber('JrN/azd2SR8=', 178, -9999, 99999), '');
    answer2.shortTextAnswer = "They are growing more peaceful";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('jq93CXyGiNU=', 182, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('iXWmfpgP0OQ=', 180, -9999, 99999), DecodeNumber('iXWmfpgP0OQ=', 180, -9999, 99999), '');
    answer3.shortTextAnswer = "They are closer to rescue than ever";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('nva+LBgLYBw=', 184, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('I+G05ZdgZDI=', 182, -9999, 99999), DecodeNumber('kwq0394yfrg=', 182, -9999, 99999), '');
    answer4.shortTextAnswer = "They are descending into savagery";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion10()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 9;
    var weight = DecodeNumber('d/AeSaKsku8=', 186, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('d/AeSaKsku8=', 186, -1000, 1000),DecodeDecimal('U/0jxB9mAK4=', 186, -1000, 1000),DecodeDecimal('U/0jxB9mAK4=', 186, -1000, 1000));
    question.answers.length = 0;
    question.num = 10;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Jack?s tribe treat the conch in this chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('d/AeSaKsku8=', 188, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('U/0jxB9mAK4=', 186, -9999, 99999), DecodeNumber('U/0jxB9mAK4=', 186, -9999, 99999), '');
    answer1.shortTextAnswer = "They keep it as a symbol of authority";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('la7xgfX9eGQ=', 190, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('N7IArAV4R5s=', 188, -9999, 99999), DecodeNumber('N7IArAV4R5s=', 188, -9999, 99999), '');
    answer2.shortTextAnswer = "They pass it around as a relic";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('drnxm2LPaCY=', 192, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('b7ji/TRvBp4=', 190, -9999, 99999), DecodeNumber('b7ji/TRvBp4=', 190, -9999, 99999), '');
    answer3.shortTextAnswer = "They use it to call meetings";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('+rUAkoBd59M=', 194, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('nqhdetzER/E=', 192, -9999, 99999), DecodeNumber('DpsZf0Snoek=', 192, -9999, 99999), '');
    answer4.shortTextAnswer = "They destroy it and reject it";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion11()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 10;
    var weight = DecodeNumber('DuhNYExhvCM=', 196, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DuhNYExhvCM=', 196, -1000, 1000),DecodeDecimal('VyKOgmroe2I=', 196, -1000, 1000),DecodeDecimal('VyKOgmroe2I=', 196, -1000, 1000));
    question.answers.length = 0;
    question.num = 11;
    question.isSingleAns = false;
    question.shortTextQuestion = "What happens when Ralph and Jack meet at Castle Rock?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('DuhNYExhvCM=', 198, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('VyKOgmroe2I=', 196, -9999, 99999), DecodeNumber('VyKOgmroe2I=', 196, -9999, 99999), '');
    answer1.shortTextAnswer = "They fight over leadership";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RsTV3d6LKb0=', 200, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('BVc7o67RNMg=', 198, -9999, 99999), DecodeNumber('AHQRUjUbzOw=', 198, -9999, 99999), '');
    answer2.shortTextAnswer = "Ralph tries to reason with Jack";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RsTV3d6LKb0=', 202, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('V7HDLslbWdo=', 200, -9999, 99999), DecodeNumber('V7HDLslbWdo=', 200, -9999, 99999), '');
    answer3.shortTextAnswer = "They agree to share leadership";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('xH6hgmwg8AA=', 204, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('mp9y/AcR4t4=', 202, -9999, 99999), DecodeNumber('mp9y/AcR4t4=', 202, -9999, 99999), '');
    answer4.shortTextAnswer = "Jack agrees to return the glasses";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion12()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 11;
    var weight = DecodeNumber('IzqN9O9nM/Q=', 206, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('IzqN9O9nM/Q=', 206, -1000, 1000),DecodeDecimal('4LqtxLZO3tU=', 206, -1000, 1000),DecodeDecimal('4LqtxLZO3tU=', 206, -1000, 1000));
    question.answers.length = 0;
    question.num = 12;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Piggy try to do when the boys turn violent?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('IzqN9O9nM/Q=', 208, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('4LqtxLZO3tU=', 206, -9999, 99999), DecodeNumber('4LqtxLZO3tU=', 206, -9999, 99999), '');
    answer1.shortTextAnswer = "He threatens to call for help";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+4O6/K46TEM=', 210, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('5hJAg4RjdbI=', 208, -9999, 99999), DecodeNumber('5hJAg4RjdbI=', 208, -9999, 99999), '');
    answer2.shortTextAnswer = "He tries to escape";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TTx4tJVeE20=', 212, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('zihznrqBanc=', 210, -9999, 99999), DecodeNumber('XxixuTLYf0M=', 210, -9999, 99999), '');
    answer3.shortTextAnswer = "He appeals to the conch for peace";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('TTx4tJVeE20=', 214, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('rqYvENacbEs=', 212, -9999, 99999), DecodeNumber('rqYvENacbEs=', 212, -9999, 99999), '');
    answer4.shortTextAnswer = "He tries to reason with Jack and his tribe";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion13()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 12;
    var weight = DecodeNumber('IDUjNsqrJD8=', 216, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('IDUjNsqrJD8=', 216, -1000, 1000),DecodeDecimal('uYAH2HH1djo=', 216, -1000, 1000),DecodeDecimal('uYAH2HH1djo=', 216, -1000, 1000));
    question.answers.length = 0;
    question.num = 13;
    question.isSingleAns = false;
    question.shortTextQuestion = "What happens to the conch in this chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('IDUjNsqrJD8=', 218, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('uYAH2HH1djo=', 216, -9999, 99999), DecodeNumber('uYAH2HH1djo=', 216, -9999, 99999), '');
    answer1.shortTextAnswer = "It is lost during the fight";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GKJ9fl6C044=', 220, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('wnYJ2EX+95A=', 218, -9999, 99999), DecodeNumber('wnYJ2EX+95A=', 218, -9999, 99999), '');
    answer2.shortTextAnswer = "It is given to Ralph as a symbol of leadership";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zCcyanBY8kM=', 222, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('9yq7twqbfII=', 220, -9999, 99999), DecodeNumber('9yq7twqbfII=', 220, -9999, 99999), '');
    answer3.shortTextAnswer = "It is taken by Jack as a trophy";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('6UHVFImyiJI=', 224, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('l33Nr3CrOns=', 222, -9999, 99999), DecodeNumber('fq5DfM5cVs0=', 222, -9999, 99999), '');
    answer4.shortTextAnswer = "It is crushed by the falling boulder";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion14()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 13;
    var weight = DecodeNumber('xpsfMvZW5fQ=', 226, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xpsfMvZW5fQ=', 226, -1000, 1000),DecodeDecimal('w50zWKgaReM=', 226, -1000, 1000),DecodeDecimal('w50zWKgaReM=', 226, -1000, 1000));
    question.answers.length = 0;
    question.num = 14;
    question.isSingleAns = false;
    question.shortTextQuestion = "What happens to Samneric at the end of this chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('xpsfMvZW5fQ=', 228, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('w50zWKgaReM=', 226, -9999, 99999), DecodeNumber('w50zWKgaReM=', 226, -9999, 99999), '');
    answer1.shortTextAnswer = "They escape with Ralph";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OW0tDTar8Ck=', 230, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('AbGvkfguRiQ=', 228, -9999, 99999), DecodeNumber('AbGvkfguRiQ=', 228, -9999, 99999), '');
    answer2.shortTextAnswer = "They are killed in the chaos";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('aOsy6y9hC9w=', 232, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('aaptLumcZEE=', 230, -9999, 99999), DecodeNumber('aaptLumcZEE=', 230, -9999, 99999), '');
    answer3.shortTextAnswer = "They are captured and imprisoned";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('dNL3jEt8YDQ=', 234, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('umVrSm8J+Hs=', 232, -9999, 99999), DecodeNumber('gWs5loYI1r4=', 232, -9999, 99999), '');
    answer4.shortTextAnswer = "They join Jack?s tribe";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion15()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 14;
    var weight = DecodeNumber('XqXYtMbxTEg=', 236, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('XqXYtMbxTEg=', 236, -1000, 1000),DecodeDecimal('uAA+njY600s=', 236, -1000, 1000),DecodeDecimal('uAA+njY600s=', 236, -1000, 1000));
    question.answers.length = 0;
    question.num = 15;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is Ralph?s greatest fear in the final chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('XqXYtMbxTEg=', 238, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('uAA+njY600s=', 236, -9999, 99999), DecodeNumber('uAA+njY600s=', 236, -9999, 99999), '');
    answer1.shortTextAnswer = "Dying alone on the island";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('x0KhFZK+XAU=', 240, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('kDUu0pxhh3Y=', 238, -9999, 99999), DecodeNumber('kDUu0pxhh3Y=', 238, -9999, 99999), '');
    answer2.shortTextAnswer = "Being abandoned by Samneric";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('6T7ZIYxTUSI=', 242, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('yVuWNRK328I=', 240, -9999, 99999), DecodeNumber('yVuWNRK328I=', 240, -9999, 99999), '');
    answer3.shortTextAnswer = "Jack becoming the permanent leader";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('psakBKuCPL4=', 244, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('nI4FJZf5zQ4=', 242, -9999, 99999), DecodeNumber('2eaUjl5bZdM=', 242, -9999, 99999), '');
    answer4.shortTextAnswer = "Losing his dignity and humanity";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion16()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 15;
    var weight = DecodeNumber('cuXBA1pX/DM=', 246, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('cuXBA1pX/DM=', 246, -1000, 1000),DecodeDecimal('QJSZeDnkzdY=', 246, -1000, 1000),DecodeDecimal('QJSZeDnkzdY=', 246, -1000, 1000));
    question.answers.length = 0;
    question.num = 16;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who saves Ralph at the end of the novel?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('cuXBA1pX/DM=', 248, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('QJSZeDnkzdY=', 246, -9999, 99999), DecodeNumber('QJSZeDnkzdY=', 246, -9999, 99999), '');
    answer1.shortTextAnswer = "Jack?s tribe";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('b2WpnFdGZDg=', 250, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('PGyBga0Dtwg=', 248, -9999, 99999), DecodeNumber('iSVYv7qm8qo=', 248, -9999, 99999), '');
    answer2.shortTextAnswer = "A naval officer";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('b2WpnFdGZDg=', 252, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('cPt7lmzZpFU=', 250, -9999, 99999), DecodeNumber('cPt7lmzZpFU=', 250, -9999, 99999), '');
    answer3.shortTextAnswer = "The boys from the other island";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('fy3v14wuIwc=', 254, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('5RD8yITz4rU=', 252, -9999, 99999), DecodeNumber('5RD8yITz4rU=', 252, -9999, 99999), '');
    answer4.shortTextAnswer = "Samneric";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion17()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 16;
    var weight = DecodeNumber('GInjxMpVZFY=', 256, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('GInjxMpVZFY=', 256, -1000, 1000),DecodeDecimal('lYMQjy+Ed9Q=', 256, -1000, 1000),DecodeDecimal('lYMQjy+Ed9Q=', 256, -1000, 1000));
    question.answers.length = 0;
    question.num = 17;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is the boy with the mulberry birthmark concerned about?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('GInjxMpVZFY=', 258, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('lYMQjy+Ed9Q=', 256, -9999, 99999), DecodeNumber('lYMQjy+Ed9Q=', 256, -9999, 99999), '');
    answer1.shortTextAnswer = "His parents";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/D+CSaBE3Sk=', 260, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('RIXYrirCQd8=', 258, -9999, 99999), DecodeNumber('RIXYrirCQd8=', 258, -9999, 99999), '');
    answer2.shortTextAnswer = "Lack of food";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Hp+IxIrf9u4=', 262, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('qfN6D0tIbHU=', 260, -9999, 99999), DecodeNumber('qfN6D0tIbHU=', 260, -9999, 99999), '');
    answer3.shortTextAnswer = "The conch shell ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('O3nGT267+rg=', 264, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('iNZ/uBQ1qZo=', 262, -9999, 99999), DecodeNumber('svCk7FZiBH4=', 262, -9999, 99999), '');
    answer4.shortTextAnswer = "A ?beastie? or snake-thing";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion18()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 17;
    var weight = DecodeNumber('4dstGnKhdbY=', 266, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4dstGnKhdbY=', 266, -1000, 1000),DecodeDecimal('FRwEeCJVgH8=', 266, -1000, 1000),DecodeDecimal('FRwEeCJVgH8=', 266, -1000, 1000));
    question.answers.length = 0;
    question.num = 18;
    question.isSingleAns = false;
    question.shortTextQuestion = "What do the boys use to start the fire?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('4dstGnKhdbY=', 268, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('FRwEeCJVgH8=', 266, -9999, 99999), DecodeNumber('FRwEeCJVgH8=', 266, -9999, 99999), '');
    answer1.shortTextAnswer = "Matches";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('x0dmM506FD8=', 270, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('JqD5G4iQciM=', 268, -9999, 99999), DecodeNumber('JqD5G4iQciM=', 268, -9999, 99999), '');
    answer2.shortTextAnswer = "Flint stones";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('QrDP23EfuIw=', 272, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('2clyo3K1ntg=', 270, -9999, 99999), DecodeNumber('2clyo3K1ntg=', 270, -9999, 99999), '');
    answer3.shortTextAnswer = "Jack?s knife";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('25OoJY/liM0=', 274, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('H7xurUEKmIQ=', 272, -9999, 99999), DecodeNumber('Jl33wRuKUAY=', 272, -9999, 99999), '');
    answer4.shortTextAnswer = "Piggy?s glasses";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion19()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 18;
    var weight = DecodeNumber('83ALrLrLPyg=', 276, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('83ALrLrLPyg=', 276, -1000, 1000),DecodeDecimal('kSTzD54HYig=', 276, -1000, 1000),DecodeDecimal('kSTzD54HYig=', 276, -1000, 1000));
    question.answers.length = 0;
    question.num = 19;
    question.isSingleAns = false;
    question.shortTextQuestion = "What tragic event possibly occurs due to the fire?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('83ALrLrLPyg=', 278, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('kSTzD54HYig=', 276, -9999, 99999), DecodeNumber('kSTzD54HYig=', 276, -9999, 99999), '');
    answer1.shortTextAnswer = "Ralph is injured";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+F9Hg98d4cE=', 280, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('TzwvxwAgn2I=', 278, -9999, 99999), DecodeNumber('0Ajm9Gy47ZA=', 278, -9999, 99999), '');
    answer2.shortTextAnswer = "The boy with the birthmark disappears";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+F9Hg98d4cE=', 282, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Dv8WkGko8bs=', 280, -9999, 99999), DecodeNumber('Dv8WkGko8bs=', 280, -9999, 99999), '');
    answer3.shortTextAnswer = "The conch is lost";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Up6tUiUoKKU=', 284, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('I+G05ZdgZDI=', 282, -9999, 99999), DecodeNumber('I+G05ZdgZDI=', 282, -9999, 99999), '');
    answer4.shortTextAnswer = "Piggy loses his glasses";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion20()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 19;
    var weight = DecodeNumber('iUKAEicV1EI=', 286, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('iUKAEicV1EI=', 286, -1000, 1000),DecodeDecimal('rl1q2scuusk=', 286, -1000, 1000),DecodeDecimal('rl1q2scuusk=', 286, -1000, 1000));
    question.answers.length = 0;
    question.num = 20;
    question.isSingleAns = false;
    question.shortTextQuestion = "What do the boys chant after the fire?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('iUKAEicV1EI=', 288, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('rl1q2scuusk=', 286, -9999, 99999), DecodeNumber('rl1q2scuusk=', 286, -9999, 99999), '');
    answer1.shortTextAnswer = "\"We are free!\"";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qDZ6oJf0BUM=', 290, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('tLEvGqIi/ZE=', 288, -9999, 99999), DecodeNumber('iGdNOM0EyBc=', 288, -9999, 99999), '');
    answer2.shortTextAnswer = "They don't chant";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qDZ6oJf0BUM=', 292, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('T/nY9qOQIc8=', 290, -9999, 99999), DecodeNumber('T/nY9qOQIc8=', 290, -9999, 99999), '');
    answer3.shortTextAnswer = "\"Smoke and rescue!\"";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('1M+6NIYODBc=', 294, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('nqhdetzER/E=', 292, -9999, 99999), DecodeNumber('nqhdetzER/E=', 292, -9999, 99999), '');
    answer4.shortTextAnswer = "?Kill the pig!\"";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion21()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 20;
    var weight = DecodeNumber('p0i6jHDO1tY=', 296, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('p0i6jHDO1tY=', 296, -1000, 1000),DecodeDecimal('0F6BwZA9FrQ=', 296, -1000, 1000),DecodeDecimal('0F6BwZA9FrQ=', 296, -1000, 1000));
    question.answers.length = 0;
    question.num = 21;
    question.isSingleAns = false;
    question.shortTextQuestion = "Why is Jack focused on hunting?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('p0i6jHDO1tY=', 298, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('0F6BwZA9FrQ=', 296, -9999, 99999), DecodeNumber('0F6BwZA9FrQ=', 296, -9999, 99999), '');
    answer1.shortTextAnswer = "To prove he?s better than Ralph";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Fqvt4Mf/Y+o=', 300, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('Ab4Lvbjh9uQ=', 298, -9999, 99999), DecodeNumber('BVc7o67RNMg=', 298, -9999, 99999), '');
    answer2.shortTextAnswer = "To satisfy his growing bloodlust";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Fqvt4Mf/Y+o=', 302, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('06CgBpxFPUA=', 300, -9999, 99999), DecodeNumber('06CgBpxFPUA=', 300, -9999, 99999), '');
    answer3.shortTextAnswer = "To prepare for winter";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('xC/o9WZLm2Y=', 304, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('ybkXZEZdk/Y=', 302, -9999, 99999), DecodeNumber('ybkXZEZdk/Y=', 302, -9999, 99999), '');
    answer4.shortTextAnswer = "To feed Piggy";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion22()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 21;
    var weight = DecodeNumber('0A8dtOHGlvg=', 306, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0A8dtOHGlvg=', 306, -1000, 1000),DecodeDecimal('D3gxWe0nYEU=', 306, -1000, 1000),DecodeDecimal('D3gxWe0nYEU=', 306, -1000, 1000));
    question.answers.length = 0;
    question.num = 22;
    question.isSingleAns = false;
    question.shortTextQuestion = "Where does Simon go at the end of the chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0A8dtOHGlvg=', 308, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('D3gxWe0nYEU=', 306, -9999, 99999), DecodeNumber('D3gxWe0nYEU=', 306, -9999, 99999), '');
    answer1.shortTextAnswer = "Into the sea";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('NRsesynMNMQ=', 310, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('OVEnht7zDcc=', 308, -9999, 99999), DecodeNumber('bUkou6nK9XE=', 308, -9999, 99999), '');
    answer2.shortTextAnswer = "Into the forest";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NRsesynMNMQ=', 312, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('zihznrqBanc=', 310, -9999, 99999), DecodeNumber('zihznrqBanc=', 310, -9999, 99999), '');
    answer3.shortTextAnswer = "To the fire site";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('4zdbaKxcufU=', 314, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('nSBTBeromoY=', 312, -9999, 99999), DecodeNumber('nSBTBeromoY=', 312, -9999, 99999), '');
    answer4.shortTextAnswer = "Back to camp";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion23()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 22;
    var weight = DecodeNumber('j6V+Pms8AAI=', 316, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('j6V+Pms8AAI=', 316, -1000, 1000),DecodeDecimal('oLBZvEtDVVM=', 316, -1000, 1000),DecodeDecimal('oLBZvEtDVVM=', 316, -1000, 1000));
    question.answers.length = 0;
    question.num = 23;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Jack claim he feels when hunting?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('j6V+Pms8AAI=', 318, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('oLBZvEtDVVM=', 316, -9999, 99999), DecodeNumber('oLBZvEtDVVM=', 316, -9999, 99999), '');
    answer1.shortTextAnswer = "Peace";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('eoZIvU75Qes=', 320, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('rDzBfU//GeQ=', 318, -9999, 99999), DecodeNumber('rDzBfU//GeQ=', 318, -9999, 99999), '');
    answer2.shortTextAnswer = "Sadness";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('vefE2EORGWA=', 322, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('nYFRUbuPy+o=', 320, -9999, 99999), DecodeNumber('nYFRUbuPy+o=', 320, -9999, 99999), '');
    answer3.shortTextAnswer = "Hunger";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('F1ZXAA8NyUs=', 324, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('0gEgcFEMcpE=', 322, -9999, 99999), DecodeNumber('l33Nr3CrOns=', 322, -9999, 99999), '');
    answer4.shortTextAnswer = "Something watching him";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion24()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 23;
    var weight = DecodeNumber('POS9W0i1vjo=', 326, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('POS9W0i1vjo=', 326, -1000, 1000),DecodeDecimal('ypoQZCDMdCM=', 326, -1000, 1000),DecodeDecimal('ypoQZCDMdCM=', 326, -1000, 1000));
    question.answers.length = 0;
    question.num = 24;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does the relationship between Ralph and Jack begin to shift?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('POS9W0i1vjo=', 328, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('ypoQZCDMdCM=', 326, -9999, 99999), DecodeNumber('ypoQZCDMdCM=', 326, -9999, 99999), '');
    answer1.shortTextAnswer = "They grow closer";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PJ1qwTc7Qsw=', 330, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('BISaGjw4yKU=', 328, -9999, 99999), DecodeNumber('6CE8ED2t7lU=', 328, -9999, 99999), '');
    answer2.shortTextAnswer = "Tension grows due to differing priorities";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('PJ1qwTc7Qsw=', 332, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('bwBaedBO+fs=', 330, -9999, 99999), DecodeNumber('bwBaedBO+fs=', 330, -9999, 99999), '');
    answer3.shortTextAnswer = "Ralph joins the hunters";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('XKxzFndrN+Y=', 334, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('umVrSm8J+Hs=', 332, -9999, 99999), DecodeNumber('umVrSm8J+Hs=', 332, -9999, 99999), '');
    answer4.shortTextAnswer = "Jack becomes Ralph?s lieutenant";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion25()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 24;
    var weight = DecodeNumber('w5iQHXlS6hU=', 336, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('w5iQHXlS6hU=', 336, -1000, 1000),DecodeDecimal('JvD0rlSrDfg=', 336, -1000, 1000),DecodeDecimal('JvD0rlSrDfg=', 336, -1000, 1000));
    question.answers.length = 0;
    question.num = 25;
    question.isSingleAns = false;
    question.shortTextQuestion = "What happens to the signal fire in this chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('w5iQHXlS6hU=', 338, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('JvD0rlSrDfg=', 336, -9999, 99999), DecodeNumber('JvD0rlSrDfg=', 336, -9999, 99999), '');
    answer1.shortTextAnswer = "It is extinguished by rain";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3t878y/uYBA=', 340, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('CSyqkn5J3zE=', 338, -9999, 99999), DecodeNumber('CSyqkn5J3zE=', 338, -9999, 99999), '');
    answer2.shortTextAnswer = "It is rekindled by Piggy";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pDG4oZtGRxU=', 342, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('wlVeTlZDFNs=', 340, -9999, 99999), DecodeNumber('wlVeTlZDFNs=', 340, -9999, 99999), '');
    answer3.shortTextAnswer = "It grows uncontrollable and sets part of the island on fire";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('EnkE5rjz+Zk=', 344, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('0iSkXZNyVZA=', 342, -9999, 99999), DecodeNumber('nI4FJZf5zQ4=', 342, -9999, 99999), '');
    answer4.shortTextAnswer = "It burns out because Jack and the hunters are too focused on hunting";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion26()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 25;
    var weight = DecodeNumber('X0Lfa/M/rkM=', 346, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('X0Lfa/M/rkM=', 346, -1000, 1000),DecodeDecimal('pcmsIbDalTE=', 346, -1000, 1000),DecodeDecimal('pcmsIbDalTE=', 346, -1000, 1000));
    question.answers.length = 0;
    question.num = 26;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is Ralph?s reaction when he sees the boys playing instead of working?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('K3Od2n8MKYY=', 348, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('7qOsiWE94Qc=', 346, -9999, 99999), DecodeNumber('pcmsIbDalTE=', 346, -9999, 99999), '');
    answer1.shortTextAnswer = "He is furious";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('K3Od2n8MKYY=', 350, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('PGyBga0Dtwg=', 348, -9999, 99999), DecodeNumber('PGyBga0Dtwg=', 348, -9999, 99999), '');
    answer2.shortTextAnswer = "He starts hunting";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2H1ELMWlVYs=', 352, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Lo3ru4w9MdU=', 350, -9999, 99999), DecodeNumber('Lo3ru4w9MdU=', 350, -9999, 99999), '');
    answer3.shortTextAnswer = "He decides to join in their play";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('CeXOEkR3/xA=', 354, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('ZesOoLXGqu0=', 352, -9999, 99999), DecodeNumber('ZesOoLXGqu0=', 352, -9999, 99999), '');
    answer4.shortTextAnswer = "He laughs along with them";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion27()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 26;
    var weight = DecodeNumber('mjN+PsZLLBU=', 356, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mjN+PsZLLBU=', 356, -1000, 1000),DecodeDecimal('yV+0WPFTAno=', 356, -1000, 1000),DecodeDecimal('yV+0WPFTAno=', 356, -1000, 1000));
    question.answers.length = 0;
    question.num = 27;
    question.isSingleAns = false;
    question.shortTextQuestion = "What happens when the boys kill the first pig?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('mjN+PsZLLBU=', 358, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('yV+0WPFTAno=', 356, -9999, 99999), DecodeNumber('yV+0WPFTAno=', 356, -9999, 99999), '');
    answer1.shortTextAnswer = "They feel guilty";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('tprIJUXHOyY=', 360, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('gssly/1lYVo=', 358, -9999, 99999), DecodeNumber('gssly/1lYVo=', 358, -9999, 99999), '');
    answer2.shortTextAnswer = "They cry";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('z3iSrkc8N1g=', 362, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('kfFA3+o/vzQ=', 360, -9999, 99999), DecodeNumber('kfFA3+o/vzQ=', 360, -9999, 99999), '');
    answer3.shortTextAnswer = "They immediately start cooking it";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('jLHNKLaAyUo=', 364, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('cYUogYM8fsg=', 362, -9999, 99999), DecodeNumber('iNZ/uBQ1qZo=', 362, -9999, 99999), '');
    answer4.shortTextAnswer = "They perform a ritualistic dance and chant";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion28()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 27;
    var weight = DecodeNumber('v6XChicLMxA=', 366, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('v6XChicLMxA=', 366, -1000, 1000),DecodeDecimal('0Fbv7qyHSkY=', 366, -1000, 1000),DecodeDecimal('0Fbv7qyHSkY=', 366, -1000, 1000));
    question.answers.length = 0;
    question.num = 28;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who is upset about the hunters? priorities?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('l7BTIj9q0i8=', 368, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('ErFc9GeKNB0=', 366, -9999, 99999), DecodeNumber('0Fbv7qyHSkY=', 366, -9999, 99999), '');
    answer1.shortTextAnswer = "Ralph";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('l7BTIj9q0i8=', 370, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('2/95b6e8Bac=', 368, -9999, 99999), DecodeNumber('2/95b6e8Bac=', 368, -9999, 99999), '');
    answer2.shortTextAnswer = "Simon";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Cd9tcH0dIxA=', 372, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('i8hDxirffG0=', 370, -9999, 99999), DecodeNumber('i8hDxirffG0=', 370, -9999, 99999), '');
    answer3.shortTextAnswer = "Maurice";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('tWXx36Jaqrg=', 374, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('H7xurUEKmIQ=', 372, -9999, 99999), DecodeNumber('H7xurUEKmIQ=', 372, -9999, 99999), '');
    answer4.shortTextAnswer = "Piggy";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion29()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 28;
    var weight = DecodeNumber('MHS7HKoxMhI=', 376, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('MHS7HKoxMhI=', 376, -1000, 1000),DecodeDecimal('HK///1GktAk=', 376, -1000, 1000),DecodeDecimal('HK///1GktAk=', 376, -1000, 1000));
    question.answers.length = 0;
    question.num = 29;
    question.isSingleAns = false;
    question.shortTextQuestion = "What new rule does Ralph establish in this chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('MHS7HKoxMhI=', 378, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('HK///1GktAk=', 376, -9999, 99999), DecodeNumber('HK///1GktAk=', 376, -9999, 99999), '');
    answer1.shortTextAnswer = "No one is allowed to hunt without permission";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FYHFeoGnxY4=', 380, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('TzwvxwAgn2I=', 378, -9999, 99999), DecodeNumber('TzwvxwAgn2I=', 378, -9999, 99999), '');
    answer2.shortTextAnswer = "Boys must sleep in the shelters every night";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('xE+tIFMbV9Y=', 382, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('eNnLtLNP498=', 380, -9999, 99999), DecodeNumber('eNnLtLNP498=', 380, -9999, 99999), '');
    answer3.shortTextAnswer = "No one can leave the camp without informing others";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('4dsXkdg+Qlc=', 384, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('oOuQvqOM2B8=', 382, -9999, 99999), DecodeNumber('0HV7vi2QFp8=', 382, -9999, 99999), '');
    answer4.shortTextAnswer = "The fire must always be kept burning";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion30()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 29;
    var weight = DecodeNumber('rCdWa75sM6Y=', 386, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('rCdWa75sM6Y=', 386, -1000, 1000),DecodeDecimal('UelkVijgfQE=', 386, -1000, 1000),DecodeDecimal('UelkVijgfQE=', 386, -1000, 1000));
    question.answers.length = 0;
    question.num = 30;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Piggy suggest about the beast?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('w4ef0aEYckA=', 388, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('ICG4tfvJoOU=', 386, -9999, 99999), DecodeNumber('UelkVijgfQE=', 386, -9999, 99999), '');
    answer1.shortTextAnswer = "It?s a figment of their imagination";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('w4ef0aEYckA=', 390, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('tLEvGqIi/ZE=', 388, -9999, 99999), DecodeNumber('tLEvGqIi/ZE=', 388, -9999, 99999), '');
    answer2.shortTextAnswer = "It is an enemy tribe";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('aOG4y87DYdE=', 392, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('6wwrI+aYn8s=', 390, -9999, 99999), DecodeNumber('6wwrI+aYn8s=', 390, -9999, 99999), '');
    answer3.shortTextAnswer = "It lives in the jungle and must be killed";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('2wn+Og+UxP4=', 394, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('gWkwDdOu5ZA=', 392, -9999, 99999), DecodeNumber('gWkwDdOu5ZA=', 392, -9999, 99999), '');
    answer4.shortTextAnswer = "It is a real animal that must be hunted";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion31()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 30;
    var weight = DecodeNumber('3h5iuiOihBU=', 396, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3h5iuiOihBU=', 396, -1000, 1000),DecodeDecimal('Oh2qaxeaARo=', 396, -1000, 1000),DecodeDecimal('Oh2qaxeaARo=', 396, -1000, 1000));
    question.answers.length = 0;
    question.num = 31;
    question.isSingleAns = false;
    question.shortTextQuestion = "How do the boys react to the idea of a beast?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3h5iuiOihBU=', 398, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Oh2qaxeaARo=', 396, -9999, 99999), DecodeNumber('Oh2qaxeaARo=', 396, -9999, 99999), '');
    answer1.shortTextAnswer = "They dismiss it immediately";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dlA5SSRdXyo=', 400, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('Ab4Lvbjh9uQ=', 398, -9999, 99999), DecodeNumber('Ab4Lvbjh9uQ=', 398, -9999, 99999), '');
    answer2.shortTextAnswer = "They start searching for it";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('iH/Aeh2kNNs=', 402, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('t30qML569Q8=', 400, -9999, 99999), DecodeNumber('t30qML569Q8=', 400, -9999, 99999), '');
    answer3.shortTextAnswer = "They decide to worship it";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ErzEH2DlzGE=', 404, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('0+PeneyENUY=', 402, -9999, 99999), DecodeNumber('UGHxNdoovJ0=', 402, -9999, 99999), '');
    answer4.shortTextAnswer = "They begin to panic and fear it";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion32()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 31;
    var weight = DecodeNumber('ZuxHhBIkmM0=', 406, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ZuxHhBIkmM0=', 406, -1000, 1000),DecodeDecimal('XZsPES7nr5o=', 406, -1000, 1000),DecodeDecimal('XZsPES7nr5o=', 406, -1000, 1000));
    question.answers.length = 0;
    question.num = 32;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who suggests that they should get rid of the littluns?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ZuxHhBIkmM0=', 408, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('XZsPES7nr5o=', 406, -9999, 99999), DecodeNumber('XZsPES7nr5o=', 406, -9999, 99999), '');
    answer1.shortTextAnswer = "Piggy";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gONqX8yGNAs=', 410, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('OVEnht7zDcc=', 408, -9999, 99999), DecodeNumber('OVEnht7zDcc=', 408, -9999, 99999), '');
    answer2.shortTextAnswer = "Ralph";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('eV8YeM6MtzU=', 412, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('3YpMr599CG4=', 410, -9999, 99999), DecodeNumber('3YpMr599CG4=', 410, -9999, 99999), '');
    answer3.shortTextAnswer = "Simon";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('DxirxmQfTLs=', 414, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('BIFGGlfccHk=', 412, -9999, 99999), DecodeNumber('JpbLsy6lJFI=', 412, -9999, 99999), '');
    answer4.shortTextAnswer = "Jack";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion33()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 32;
    var weight = DecodeNumber('+oLJ8AYjeYo=', 416, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+oLJ8AYjeYo=', 416, -1000, 1000),DecodeDecimal('rwtCtorGa2E=', 416, -1000, 1000),DecodeDecimal('rwtCtorGa2E=', 416, -1000, 1000));
    question.answers.length = 0;
    question.num = 33;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is Ralph?s main priority at the end of the meeting?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+oLJ8AYjeYo=', 418, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('rwtCtorGa2E=', 416, -9999, 99999), DecodeNumber('rwtCtorGa2E=', 416, -9999, 99999), '');
    answer1.shortTextAnswer = "To find the beast";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4lbOzqqjQmI=', 420, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('Mo5zvBHdcpU=', 418, -9999, 99999), DecodeNumber('Mo5zvBHdcpU=', 418, -9999, 99999), '');
    answer2.shortTextAnswer = "To prepare for a feast";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Rmdbh/DHFIQ=', 422, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('4TxVRmBUu4g=', 420, -9999, 99999), DecodeNumber('4TxVRmBUu4g=', 420, -9999, 99999), '');
    answer3.shortTextAnswer = "To escape the island";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Wt7VjBaSKU8=', 424, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('BGXglcghpNQ=', 422, -9999, 99999), DecodeNumber('0gEgcFEMcpE=', 422, -9999, 99999), '');
    answer4.shortTextAnswer = "To keep the group united";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion34()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 33;
    var weight = DecodeNumber('gM6IjF1FJKQ=', 426, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('gM6IjF1FJKQ=', 426, -1000, 1000),DecodeDecimal('I2A5tz5V5WI=', 426, -1000, 1000),DecodeDecimal('I2A5tz5V5WI=', 426, -1000, 1000));
    question.answers.length = 0;
    question.num = 34;
    question.isSingleAns = false;
    question.shortTextQuestion = "What happens to the parachutist?s body?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gM6IjF1FJKQ=', 428, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('I2A5tz5V5WI=', 426, -9999, 99999), DecodeNumber('I2A5tz5V5WI=', 426, -9999, 99999), '');
    answer1.shortTextAnswer = "It is discovered by Ralph";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OaOo7ZJCCpc=', 430, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('BISaGjw4yKU=', 428, -9999, 99999), DecodeNumber('BISaGjw4yKU=', 428, -9999, 99999), '');
    answer2.shortTextAnswer = "It is immediately carried off by Jack?s tribe";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zncaC5F2zyI=', 432, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('2KOpgSGQwJo=', 430, -9999, 99999), DecodeNumber('2KOpgSGQwJo=', 430, -9999, 99999), '');
    answer3.shortTextAnswer = "It floats away in the wind";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('fLPHL/UkGeI=', 434, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('SfS+jjOCAWY=', 432, -9999, 99999), DecodeNumber('bLHKNy2ioTw=', 432, -9999, 99999), '');
    answer4.shortTextAnswer = "It is mistaken for the beast";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion35()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 34;
    var weight = DecodeNumber('vExlVr0BDe4=', 436, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vExlVr0BDe4=', 436, -1000, 1000),DecodeDecimal('jEdtB5wbIRA=', 436, -1000, 1000),DecodeDecimal('jEdtB5wbIRA=', 436, -1000, 1000));
    question.answers.length = 0;
    question.num = 35;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Jack say about the beast in this chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('vExlVr0BDe4=', 438, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('jEdtB5wbIRA=', 436, -9999, 99999), DecodeNumber('jEdtB5wbIRA=', 436, -9999, 99999), '');
    answer1.shortTextAnswer = "That it is a figment of their imagination";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Zl8hPvw+sOY=', 440, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('0w9njSvaSN8=', 438, -9999, 99999), DecodeNumber('0w9njSvaSN8=', 438, -9999, 99999), '');
    answer2.shortTextAnswer = "That the beast is actually a man";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hjJG1gAQa5Q=', 442, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('jTcO2L8mBQs=', 440, -9999, 99999), DecodeNumber('jTcO2L8mBQs=', 440, -9999, 99999), '');
    answer3.shortTextAnswer = "That they should worship it";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('LoFC0stosZk=', 444, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('QZxhbSGsdoc=', 442, -9999, 99999), DecodeNumber('0iSkXZNyVZA=', 442, -9999, 99999), '');
    answer4.shortTextAnswer = "That he will hunt it down";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion36()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 35;
    var weight = DecodeNumber('lvv6aERUUas=', 446, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lvv6aERUUas=', 446, -1000, 1000),DecodeDecimal('7qOsiWE94Qc=', 446, -1000, 1000),DecodeDecimal('7qOsiWE94Qc=', 446, -1000, 1000));
    question.answers.length = 0;
    question.num = 36;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who suggests the idea of the beast in the ocean?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lvv6aERUUas=', 448, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('7qOsiWE94Qc=', 446, -9999, 99999), DecodeNumber('7qOsiWE94Qc=', 446, -9999, 99999), '');
    answer1.shortTextAnswer = "Ralph";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7cQgp82Tykw=', 450, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('H+l2e8STCkY=', 448, -9999, 99999), DecodeNumber('H+l2e8STCkY=', 448, -9999, 99999), '');
    answer2.shortTextAnswer = "Jack";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('SfQKC81guWk=', 452, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('nxart7qPZU4=', 450, -9999, 99999), DecodeNumber('DPETCLg2FXk=', 450, -9999, 99999), '');
    answer3.shortTextAnswer = "Samneric";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('SfQKC81guWk=', 454, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('q2ZOKZOFpTM=', 452, -9999, 99999), DecodeNumber('q2ZOKZOFpTM=', 452, -9999, 99999), '');
    answer4.shortTextAnswer = "Piggy";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion37()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 36;
    var weight = DecodeNumber('mhLOmE6GgKs=', 456, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mhLOmE6GgKs=', 456, -1000, 1000),DecodeDecimal('+cm/jCFJnOs=', 456, -1000, 1000),DecodeDecimal('+cm/jCFJnOs=', 456, -1000, 1000));
    question.answers.length = 0;
    question.num = 37;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is Ralph?s biggest concern at the end of the chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('mhLOmE6GgKs=', 458, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('+cm/jCFJnOs=', 456, -9999, 99999), DecodeNumber('+cm/jCFJnOs=', 456, -9999, 99999), '');
    answer1.shortTextAnswer = "The lack of food";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7xet0rQR3I4=', 460, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('xYNU5OrG7K8=', 458, -9999, 99999), DecodeNumber('S5kcteGjpbA=', 458, -9999, 99999), '');
    answer2.shortTextAnswer = "The boys losing focus and becoming more savage";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7xet0rQR3I4=', 462, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('RhB9w7FOVjs=', 460, -9999, 99999), DecodeNumber('RhB9w7FOVjs=', 460, -9999, 99999), '');
    answer3.shortTextAnswer = "The state of the fire";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('kxj8gD4uQT8=', 464, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('cYUogYM8fsg=', 462, -9999, 99999), DecodeNumber('cYUogYM8fsg=', 462, -9999, 99999), '');
    answer4.shortTextAnswer = "His own safety";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion38()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 37;
    var weight = DecodeNumber('cuRSfbdtymM=', 466, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('cuRSfbdtymM=', 466, -1000, 1000),DecodeDecimal('ErFc9GeKNB0=', 466, -1000, 1000),DecodeDecimal('ErFc9GeKNB0=', 466, -1000, 1000));
    question.answers.length = 0;
    question.num = 38;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Ralph feel about being a hunter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('cuRSfbdtymM=', 468, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('ErFc9GeKNB0=', 466, -9999, 99999), DecodeNumber('ErFc9GeKNB0=', 466, -9999, 99999), '');
    answer1.shortTextAnswer = "He doesn?t enjoy it at all";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('38+CrTZOf90=', 470, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('HC5/MwZaiMU=', 468, -9999, 99999), DecodeNumber('HC5/MwZaiMU=', 468, -9999, 99999), '');
    answer2.shortTextAnswer = "He sees it as a way to prove himself";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0VlWJlJqHBU=', 472, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('vnfKGEWtAFk=', 470, -9999, 99999), DecodeNumber('vnfKGEWtAFk=', 470, -9999, 99999), '');
    answer3.shortTextAnswer = "He finds it a necessary evil";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('nMIxahb03Y0=', 474, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('o9d2VgI9UsE=', 472, -9999, 99999), DecodeNumber('laKagXedEwc=', 472, -9999, 99999), '');
    answer4.shortTextAnswer = "He finds it thrilling and fun";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion39()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 38;
    var weight = DecodeNumber('Cfib4Wg+P74=', 476, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Cfib4Wg+P74=', 476, -1000, 1000),DecodeDecimal('nLhrXsQuEsw=', 476, -1000, 1000),DecodeDecimal('nLhrXsQuEsw=', 476, -1000, 1000));
    question.answers.length = 0;
    question.num = 39;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who starts the chant ?Kill the pig! Cut her throat! Spill her blood!??";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Cfib4Wg+P74=', 478, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('nLhrXsQuEsw=', 476, -9999, 99999), DecodeNumber('nLhrXsQuEsw=', 476, -9999, 99999), '');
    answer1.shortTextAnswer = "Piggy";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gBq18fIAKoU=', 480, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('T9Xdau3gBxg=', 478, -9999, 99999), DecodeNumber('3C7pAn/s8hA=', 478, -9999, 99999), '');
    answer2.shortTextAnswer = "Jack";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gBq18fIAKoU=', 482, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('i62E6+e48Z4=', 480, -9999, 99999), DecodeNumber('i62E6+e48Z4=', 480, -9999, 99999), '');
    answer3.shortTextAnswer = "Simon";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('wvE2AWOouaw=', 484, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('oOuQvqOM2B8=', 482, -9999, 99999), DecodeNumber('oOuQvqOM2B8=', 482, -9999, 99999), '');
    answer4.shortTextAnswer = "Ralph";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion40()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 39;
    var weight = DecodeNumber('yrI1GaOQx/4=', 486, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('yrI1GaOQx/4=', 486, -1000, 1000),DecodeDecimal('ICG4tfvJoOU=', 486, -1000, 1000),DecodeDecimal('ICG4tfvJoOU=', 486, -1000, 1000));
    question.answers.length = 0;
    question.num = 40;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Ralph feel after the boar hunt?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gbuC1eNP0kI=', 488, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('/8g1tzCtOhQ=', 486, -9999, 99999), DecodeNumber('ICG4tfvJoOU=', 486, -9999, 99999), '');
    answer1.shortTextAnswer = "Proud and exhilarated";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gbuC1eNP0kI=', 490, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('tZfME6kDgvM=', 488, -9999, 99999), DecodeNumber('tZfME6kDgvM=', 488, -9999, 99999), '');
    answer2.shortTextAnswer = "Exhausted and scared";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('24X2YGRSq/8=', 492, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('fXS0mCSInQ8=', 490, -9999, 99999), DecodeNumber('fXS0mCSInQ8=', 490, -9999, 99999), '');
    answer3.shortTextAnswer = "Indifferent";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('VYxt2rO1AzI=', 494, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('+7mLK/BWJuY=', 492, -9999, 99999), DecodeNumber('+7mLK/BWJuY=', 492, -9999, 99999), '');
    answer4.shortTextAnswer = "Horrified by the violence";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion41()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 40;
    var weight = DecodeNumber('qj2mJYJZdEo=', 496, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('qj2mJYJZdEo=', 496, -1000, 1000),DecodeDecimal('l0RnJKZOj9s=', 496, -1000, 1000),DecodeDecimal('l0RnJKZOj9s=', 496, -1000, 1000));
    question.answers.length = 0;
    question.num = 41;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Simon do during the boys? reenactment of the hunt?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('qj2mJYJZdEo=', 498, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('l0RnJKZOj9s=', 496, -9999, 99999), DecodeNumber('l0RnJKZOj9s=', 496, -9999, 99999), '');
    answer1.shortTextAnswer = "He tries to stop them";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Up9hTOHXWjw=', 500, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('TjnKOkjgdm8=', 498, -9999, 99999), DecodeNumber('H65U3vRlJXU=', 498, -9999, 99999), '');
    answer2.shortTextAnswer = "He quietly observes from a distance";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Up9hTOHXWjw=', 502, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('9K6ubDmH83M=', 500, -9999, 99999), DecodeNumber('9K6ubDmH83M=', 500, -9999, 99999), '');
    answer3.shortTextAnswer = "He runs away in fear";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('5H1ALiNeC48=', 504, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('0+PeneyENUY=', 502, -9999, 99999), DecodeNumber('0+PeneyENUY=', 502, -9999, 99999), '');
    answer4.shortTextAnswer = "He joins in and participates";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion42()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 41;
    var weight = DecodeNumber('t3tCpLH82Io=', 506, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('t3tCpLH82Io=', 506, -1000, 1000),DecodeDecimal('IFj1taWe1B4=', 506, -1000, 1000),DecodeDecimal('IFj1taWe1B4=', 506, -1000, 1000));
    question.answers.length = 0;
    question.num = 42;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Jack react to Ralph?s leadership during the hunt?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('t3tCpLH82Io=', 508, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('IFj1taWe1B4=', 506, -9999, 99999), DecodeNumber('IFj1taWe1B4=', 506, -9999, 99999), '');
    answer1.shortTextAnswer = "He respects Ralph?s leadership";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XQDxwXqU/vM=', 510, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('1unrei+kzdM=', 508, -9999, 99999), DecodeNumber('1unrei+kzdM=', 508, -9999, 99999), '');
    answer2.shortTextAnswer = "He stays silent but resents Ralph";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+oqOFVfiPVw=', 512, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('S2452Thj5Do=', 510, -9999, 99999), DecodeNumber('S2452Thj5Do=', 510, -9999, 99999), '');
    answer3.shortTextAnswer = "He expresses admiration for Ralph";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('7/5uHhMeQH4=', 514, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('zjQ524eBQZI=', 512, -9999, 99999), DecodeNumber('BIFGGlfccHk=', 512, -9999, 99999), '');
    answer4.shortTextAnswer = "He tries to challenge Ralph for control";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion43()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 42;
    var weight = DecodeNumber('yb3d9ZiHxCs=', 516, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('yb3d9ZiHxCs=', 516, -1000, 1000),DecodeDecimal('sDDP+d2ljG8=', 516, -1000, 1000),DecodeDecimal('sDDP+d2ljG8=', 516, -1000, 1000));
    question.answers.length = 0;
    question.num = 43;
    question.isSingleAns = false;
    question.shortTextQuestion = "What do the boys use to symbolize their new tribe?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yb3d9ZiHxCs=', 518, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('sDDP+d2ljG8=', 516, -9999, 99999), DecodeNumber('sDDP+d2ljG8=', 516, -9999, 99999), '');
    answer1.shortTextAnswer = "The conch";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4VQ2w7yYBWI=', 520, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('FuinA5gbn6Q=', 518, -9999, 99999), DecodeNumber('FuinA5gbn6Q=', 518, -9999, 99999), '');
    answer2.shortTextAnswer = "A painted banner";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pn+JtvSTSDQ=', 522, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('CNogADqLZt0=', 520, -9999, 99999), DecodeNumber('CNogADqLZt0=', 520, -9999, 99999), '');
    answer3.shortTextAnswer = "A carved idol";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('xXJGUDjUL+o=', 524, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('kvNn8DeCFz8=', 522, -9999, 99999), DecodeNumber('BGXglcghpNQ=', 522, -9999, 99999), '');
    answer4.shortTextAnswer = "A boar?s head on a stick";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion44()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 43;
    var weight = DecodeNumber('OjzbWcfRGeU=', 526, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('OjzbWcfRGeU=', 526, -1000, 1000),DecodeDecimal('Vye5UjAmOBE=', 526, -1000, 1000),DecodeDecimal('Vye5UjAmOBE=', 526, -1000, 1000));
    question.answers.length = 0;
    question.num = 44;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Jack react when the boys initially refuse to join his tribe?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('OjzbWcfRGeU=', 528, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Vye5UjAmOBE=', 526, -9999, 99999), DecodeNumber('Vye5UjAmOBE=', 526, -9999, 99999), '');
    answer1.shortTextAnswer = "He leaves them behind";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5m/+Fv/d/OE=', 530, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('VJQJTRNqJ5s=', 528, -9999, 99999), DecodeNumber('1lw5xu3wI0Y=', 528, -9999, 99999), '');
    answer2.shortTextAnswer = "He uses food as a bribe to lure them";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5m/+Fv/d/OE=', 532, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('X0JZcCASRAc=', 530, -9999, 99999), DecodeNumber('X0JZcCASRAc=', 530, -9999, 99999), '');
    answer3.shortTextAnswer = "He abandons them completely";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('qFtwMmCOZLY=', 534, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('SfS+jjOCAWY=', 532, -9999, 99999), DecodeNumber('SfS+jjOCAWY=', 532, -9999, 99999), '');
    answer4.shortTextAnswer = "He forces them to join";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion45()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 44;
    var weight = DecodeNumber('pdHgScTcgEg=', 536, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('pdHgScTcgEg=', 536, -1000, 1000),DecodeDecimal('4U8NVKVgmVY=', 536, -1000, 1000),DecodeDecimal('4U8NVKVgmVY=', 536, -1000, 1000));
    question.answers.length = 0;
    question.num = 45;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Piggy react to the idea of a beast?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('pdHgScTcgEg=', 538, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('4U8NVKVgmVY=', 536, -9999, 99999), DecodeNumber('4U8NVKVgmVY=', 536, -9999, 99999), '');
    answer1.shortTextAnswer = "He dismisses it and laughs it off";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qKRXGHqO40I=', 540, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('Ru+0v9XLryk=', 538, -9999, 99999), DecodeNumber('toHDq1dj0r0=', 538, -9999, 99999), '');
    answer2.shortTextAnswer = "He tries to rationalize and dismisses it logically";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qKRXGHqO40I=', 542, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('WTJhZtb3VB0=', 540, -9999, 99999), DecodeNumber('WTJhZtb3VB0=', 540, -9999, 99999), '');
    answer3.shortTextAnswer = "He accepts that the beast exists";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('07BsJn60aMA=', 544, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('QZxhbSGsdoc=', 542, -9999, 99999), DecodeNumber('QZxhbSGsdoc=', 542, -9999, 99999), '');
    answer4.shortTextAnswer = "He becomes afraid and starts crying";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion46()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 45;
    var weight = DecodeNumber('vjUk2mzJZGk=', 546, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vjUk2mzJZGk=', 546, -1000, 1000),DecodeDecimal('V6nFXJToEeI=', 546, -1000, 1000),DecodeDecimal('V6nFXJToEeI=', 546, -1000, 1000));
    question.answers.length = 0;
    question.num = 46;
    question.isSingleAns = false;
    question.shortTextQuestion = "What symbolic act does Simon engage in during this chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('vjUk2mzJZGk=', 548, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('V6nFXJToEeI=', 546, -9999, 99999), DecodeNumber('V6nFXJToEeI=', 546, -9999, 99999), '');
    answer1.shortTextAnswer = "He builds a hut in the jungle";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('lHZj73sX8fg=', 550, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('5Ikyd0Dyh4g=', 548, -9999, 99999), DecodeNumber('ePRTGRHMKjE=', 548, -9999, 99999), '');
    answer2.shortTextAnswer = "He faces the \"Lord of the Flies\" in a hallucination";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lHZj73sX8fg=', 552, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('nxart7qPZU4=', 550, -9999, 99999), DecodeNumber('nxart7qPZU4=', 550, -9999, 99999), '');
    answer3.shortTextAnswer = "He offers a prayer for rescue";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('vsQzoCzpBJ0=', 554, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('Rs9C/svy3yM=', 552, -9999, 99999), DecodeNumber('Rs9C/svy3yM=', 552, -9999, 99999), '');
    answer4.shortTextAnswer = "He speaks the truth about the beast";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion47()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 46;
    var weight = DecodeNumber('KDhVkL86Ve8=', 556, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('KDhVkL86Ve8=', 556, -1000, 1000),DecodeDecimal('tEPV1jo0nvk=', 556, -1000, 1000),DecodeDecimal('tEPV1jo0nvk=', 556, -1000, 1000));
    question.answers.length = 0;
    question.num = 47;
    question.isSingleAns = false;
    question.shortTextQuestion = "How do the boys react when they kill Simon?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('KDhVkL86Ve8=', 558, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('tEPV1jo0nvk=', 556, -9999, 99999), DecodeNumber('tEPV1jo0nvk=', 556, -9999, 99999), '');
    answer1.shortTextAnswer = "They realize their mistake and feel guilty";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LZgueYoisQ4=', 560, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('xYNU5OrG7K8=', 558, -9999, 99999), DecodeNumber('xYNU5OrG7K8=', 558, -9999, 99999), '');
    answer2.shortTextAnswer = "They immediately flee in fear";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('J3dX0k4pZFc=', 562, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('LG/jsUaQJ1E=', 560, -9999, 99999), DecodeNumber('LG/jsUaQJ1E=', 560, -9999, 99999), '');
    answer3.shortTextAnswer = "They carry his body to the ocean";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('zyMZeMBatBo=', 564, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('bgS3Lf1LNDc=', 562, -9999, 99999), DecodeNumber('cIzogwhHuLs=', 562, -9999, 99999), '');
    answer4.shortTextAnswer = "They continue to dance in excitement";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion48()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 47;
    var weight = DecodeNumber('1hgaiEdzh4Q=', 566, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('1hgaiEdzh4Q=', 566, -1000, 1000),DecodeDecimal('8wcasRYkXL8=', 566, -1000, 1000),DecodeDecimal('8wcasRYkXL8=', 566, -1000, 1000));
    question.answers.length = 0;
    question.num = 48;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does the storm affect the boys? actions?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1hgaiEdzh4Q=', 568, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('8wcasRYkXL8=', 566, -9999, 99999), DecodeNumber('8wcasRYkXL8=', 566, -9999, 99999), '');
    answer1.shortTextAnswer = "It causes them to stop the chant and take shelter";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xpQUu4u+Xoc=', 570, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('gc1kJTvB99c=', 568, -9999, 99999), DecodeNumber('gc1kJTvB99c=', 568, -9999, 99999), '');
    answer2.shortTextAnswer = "It helps them escape the island";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RMagnRRVdjc=', 572, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('kdGbl5HC1Lk=', 570, -9999, 99999), DecodeNumber('kdGbl5HC1Lk=', 570, -9999, 99999), '');
    answer3.shortTextAnswer = "It causes them to reflect on their behavior";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ltwV9tHUj2E=', 574, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('uxdCWst4NoQ=', 572, -9999, 99999), DecodeNumber('o9d2VgI9UsE=', 572, -9999, 99999), '');
    answer4.shortTextAnswer = "It makes them more aggressive and heightens the frenzy";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion49()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 48;
    var weight = DecodeNumber('gfdn37HJoWo=', 576, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('gfdn37HJoWo=', 576, -1000, 1000),DecodeDecimal('MIlUwogAs1A=', 576, -1000, 1000),DecodeDecimal('MIlUwogAs1A=', 576, -1000, 1000));
    question.answers.length = 0;
    question.num = 49;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does the death of Simon symbolize in the novel?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gfdn37HJoWo=', 578, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('MIlUwogAs1A=', 576, -9999, 99999), DecodeNumber('MIlUwogAs1A=', 576, -9999, 99999), '');
    answer1.shortTextAnswer = "The death of hope";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('tu4LFoLUAjQ=', 580, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('T9Xdau3gBxg=', 578, -9999, 99999), DecodeNumber('T9Xdau3gBxg=', 578, -9999, 99999), '');
    answer2.shortTextAnswer = "The triumph of order over chaos";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2o+TQjVHSAg=', 582, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('fQf/zLZSBMQ=', 580, -9999, 99999), DecodeNumber('fQf/zLZSBMQ=', 580, -9999, 99999), '');
    answer3.shortTextAnswer = "The arrival of rescue";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('rncefaaMocM=', 584, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('x00Rjitfg18=', 582, -9999, 99999), DecodeNumber('9Ami3upq7PM=', 582, -9999, 99999), '');
    answer4.shortTextAnswer = "The end of innocence";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion50()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 49;
    var weight = DecodeNumber('fC4disXUmhQ=', 586, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fC4disXUmhQ=', 586, -1000, 1000),DecodeDecimal('/8g1tzCtOhQ=', 586, -1000, 1000),DecodeDecimal('/8g1tzCtOhQ=', 586, -1000, 1000));
    question.answers.length = 0;
    question.num = 50;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does the natural world react to Simon?s death?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fC4disXUmhQ=', 588, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('/8g1tzCtOhQ=', 586, -9999, 99999), DecodeNumber('/8g1tzCtOhQ=', 586, -9999, 99999), '');
    answer1.shortTextAnswer = "The sea becomes calm";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('hgtTbZNSbbs=', 590, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('8mbHrrRJpA4=', 588, -9999, 99999), DecodeNumber('8mbHrrRJpA4=', 588, -9999, 99999), '');
    answer2.shortTextAnswer = "The island begins to burn";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('T9xZ1UG0+mk=', 592, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('3SxcrZMmKUY=', 590, -9999, 99999), DecodeNumber('3SxcrZMmKUY=', 590, -9999, 99999), '');
    answer3.shortTextAnswer = "The animals grow more peaceful";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('EQSDnFKJ0D8=', 594, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('Fd6QAzf6PkA=', 592, -9999, 99999), DecodeNumber('U9vhDkdYiZA=', 592, -9999, 99999), '');
    answer4.shortTextAnswer = "The storm worsens";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion51()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 50;
    var weight = DecodeNumber('cn4HXQsmlPU=', 596, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+xBm88lroqA=', 596, -1000, 1000),DecodeDecimal('+6/AaRpRJaE=', 596, -1000, 1000),DecodeDecimal('+6/AaRpRJaE=', 596, -1000, 1000));
    question.num = 51;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 6 (about 120 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion52()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 51;
    var weight = DecodeNumber('NwyLnTK/Gts=', 606, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('XAIp2V0Rg8M=', 606, -1000, 1000),DecodeDecimal('cn4HXQsmlPU=', 606, -1000, 1000),DecodeDecimal('cn4HXQsmlPU=', 606, -1000, 1000));
    question.num = 52;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 11 (about 120 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}


/* Code generated function */
function ClearQuestion1()
{
    const questionIndex = 0;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion2()
{
    const questionIndex = 1;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion3()
{
    const questionIndex = 2;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion4()
{
    const questionIndex = 3;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion5()
{
    const questionIndex = 4;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion6()
{
    const questionIndex = 5;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion7()
{
    const questionIndex = 6;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion8()
{
    const questionIndex = 7;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion9()
{
    const questionIndex = 8;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion10()
{
    const questionIndex = 9;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion11()
{
    const questionIndex = 10;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion12()
{
    const questionIndex = 11;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion13()
{
    const questionIndex = 12;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion14()
{
    const questionIndex = 13;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion15()
{
    const questionIndex = 14;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion16()
{
    const questionIndex = 15;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion17()
{
    const questionIndex = 16;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion18()
{
    const questionIndex = 17;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion19()
{
    const questionIndex = 18;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion20()
{
    const questionIndex = 19;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion21()
{
    const questionIndex = 20;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion22()
{
    const questionIndex = 21;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion23()
{
    const questionIndex = 22;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion24()
{
    const questionIndex = 23;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion25()
{
    const questionIndex = 24;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion26()
{
    const questionIndex = 25;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion27()
{
    const questionIndex = 26;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion28()
{
    const questionIndex = 27;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion29()
{
    const questionIndex = 28;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion30()
{
    const questionIndex = 29;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion31()
{
    const questionIndex = 30;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion32()
{
    const questionIndex = 31;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion33()
{
    const questionIndex = 32;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion34()
{
    const questionIndex = 33;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion35()
{
    const questionIndex = 34;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion36()
{
    const questionIndex = 35;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion37()
{
    const questionIndex = 36;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion38()
{
    const questionIndex = 37;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion39()
{
    const questionIndex = 38;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion40()
{
    const questionIndex = 39;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion41()
{
    const questionIndex = 40;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion42()
{
    const questionIndex = 41;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion43()
{
    const questionIndex = 42;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion44()
{
    const questionIndex = 43;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion45()
{
    const questionIndex = 44;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion46()
{
    const questionIndex = 45;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion47()
{
    const questionIndex = 46;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion48()
{
    const questionIndex = 47;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion49()
{
    const questionIndex = 48;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion50()
{
    const questionIndex = 49;
    ClearMultipleAnswerChoice(questionIndex,0);
    ClearMultipleAnswerChoice(questionIndex,1);
    ClearMultipleAnswerChoice(questionIndex,2);
    ClearMultipleAnswerChoice(questionIndex,3);

}
/* Code generated function */
function ClearQuestion51()
{
    const questionIndex = 50;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion52()
{
    const questionIndex = 51;
    ClearOpenAns(questionIndex);

}







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
    const type = QMAKE_MULTIANS;
    const questionIndex = 0;
    var weight = DecodeNumber('f1jhFc9eloM=', 563, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('f1jhFc9eloM=', 563, -1000, 1000),DecodeDecimal('giMtBBAo/lU=', 563, -1000, 1000),DecodeDecimal('giMtBBAo/lU=', 563, -1000, 1000));
    question.answers.length = 0;
    question.num = 1;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who is elected chief by the boys?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0sHEw0CZFqU=', 924, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Piggy";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('CKY4zQw/eGU=', 926, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Ralph";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('622H58dA4Lw=', 928, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Jack";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('0VQwcwoDmgw=', 930, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Simon";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 1;
    var weight = DecodeNumber('+ii2xcdzTsA=', 932, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+ii2xcdzTsA=', 932, -1000, 1000),DecodeDecimal('iGEXxsF43sA=', 932, -1000, 1000),DecodeDecimal('iGEXxsF43sA=', 932, -1000, 1000));
    question.answers.length = 0;
    question.num = 2;
    question.isSingleAns = false;
    question.shortTextQuestion = "Why does Jack believe he should be leader?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+ii2xcdzTsA=', 934, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He found the conch";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('N+QuQBXk+bg=', 936, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He's head of the choir";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lcg+57Izrzs=', 938, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He has military experience";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('kQrtoS32/mo=', 940, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He's the strongest";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 2;
    var weight = DecodeNumber('nhPY3OI+cMQ=', 942, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('nhPY3OI+cMQ=', 942, -1000, 1000),DecodeDecimal('8Q4bWv9BUeM=', 942, -1000, 1000),DecodeDecimal('8Q4bWv9BUeM=', 942, -1000, 1000));
    question.answers.length = 0;
    question.num = 3;
    question.isSingleAns = false;
    question.shortTextQuestion = "What do the boys use the conch shell for?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('nhPY3OI+cMQ=', 944, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Cooking";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3yQIj+jb/c8=', 946, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Collecting water";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('oWxDYFiNNck=', 948, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Blowing signals";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('FHuucxhnXFI=', 950, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Decoration";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 3;
    var weight = DecodeNumber('R7FSk9uhVHU=', 952, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('R7FSk9uhVHU=', 952, -1000, 1000),DecodeDecimal('sNNObwsa9pw=', 952, -1000, 1000),DecodeDecimal('sNNObwsa9pw=', 952, -1000, 1000));
    question.answers.length = 0;
    question.num = 4;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is Ralph's father's occupation?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('R7FSk9uhVHU=', 954, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Naval officer";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('QGc42rzUuKY=', 956, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Army captain";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('o7UjrH5+Gc8=', 958, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Sailor";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('p/2EZ78t0/g=', 960, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Pilot";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 4;
    var weight = DecodeNumber('besL0vBAk+Q=', 962, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('besL0vBAk+Q=', 962, -1000, 1000),DecodeDecimal('KQDovJp3adI=', 962, -1000, 1000),DecodeDecimal('KQDovJp3adI=', 962, -1000, 1000));
    question.answers.length = 0;
    question.num = 5;
    question.isSingleAns = false;
    question.shortTextQuestion = "Why is the conch important?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('besL0vBAk+Q=', 964, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "It was given by Ralph's father";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0qjyhV4naZo=', 966, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "It belongs to Piggy";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('K24KV5cOP88=', 968, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "It symbolizes leadership and order";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('lpGU9yuoGCA=', 970, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "It can make fire";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 5;
    var weight = DecodeNumber('vGP8TAvJNss=', 972, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vGP8TAvJNss=', 972, -1000, 1000),DecodeDecimal('qQdcO32k0Ko=', 972, -1000, 1000),DecodeDecimal('qQdcO32k0Ko=', 972, -1000, 1000));
    question.answers.length = 0;
    question.num = 6;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who is left with Ralph and Piggy after Simon's death?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('vGP8TAvJNss=', 974, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "No one; they are abandoned";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bmjdpN517Tc=', 976, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Only Piggy";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('q3YsjWlJI6U=', 978, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Samneric";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('O2G7SRb1Yl8=', 980, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Jack and his followers";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion7()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 6;
    var weight = DecodeNumber('9y9/HL0QKsE=', 982, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('9y9/HL0QKsE=', 982, -1000, 1000),DecodeDecimal('4b71FQiH6UE=', 982, -1000, 1000),DecodeDecimal('4b71FQiH6UE=', 982, -1000, 1000));
    question.answers.length = 0;
    question.num = 7;
    question.isSingleAns = false;
    question.shortTextQuestion = "What happens to Piggy's glasses in this chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9y9/HL0QKsE=', 984, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "They are used to start the fire";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6yrqpysc5wc=', 986, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "They are lost in the fire";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('eYwHuATdG1k=', 988, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "They break";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('xBAPyAv7Iiw=', 990, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "They are stolen by Jack";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion8()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 7;
    var weight = DecodeNumber('Iyz941itL+0=', 992, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Iyz941itL+0=', 992, -1000, 1000),DecodeDecimal('HhsRDlTdZsg=', 992, -1000, 1000),DecodeDecimal('HhsRDlTdZsg=', 992, -1000, 1000));
    question.answers.length = 0;
    question.num = 8;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is Ralph's main concern after the death of Simon?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Iyz941itL+0=', 994, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "To rebuild the huts";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('lnoIKuooD8U=', 996, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "To get revenge on Jack";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('HlFiW76Ug5o=', 998, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "To keep the fire burning";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('PaLhkHclHiM=', 1000, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "To get back to civilization";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion9()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 8;
    var weight = DecodeNumber('+vy6Vsa9vkI=', 1002, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+vy6Vsa9vkI=', 1002, -1000, 1000),DecodeDecimal('67Dz5jiB8QQ=', 1002, -1000, 1000),DecodeDecimal('67Dz5jiB8QQ=', 1002, -1000, 1000));
    question.answers.length = 0;
    question.num = 9;
    question.isSingleAns = false;
    question.shortTextQuestion = "What action does Jack take after stealing Piggy's glasses?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+vy6Vsa9vkI=', 1004, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He holds them ransom";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('rRf1wUwNtJo=', 1006, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He gives them back to Piggy";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LSzk4ib5lWE=', 1008, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He uses them to start a new fire";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('7BLQugnmXmw=', 1010, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He destroys the glasses";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion10()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 9;
    var weight = DecodeNumber('C8iyfrRYyg4=', 1012, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('C8iyfrRYyg4=', 1012, -1000, 1000),DecodeDecimal('8koiidBCl8o=', 1012, -1000, 1000),DecodeDecimal('8koiidBCl8o=', 1012, -1000, 1000));
    question.answers.length = 0;
    question.num = 10;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Jack's tribe treat the conch in this chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('C8iyfrRYyg4=', 1014, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "They use it to call meetings";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RvonqNfou1Q=', 1016, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "They pass it around as a relic";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('HFOzpBL7EAc=', 1018, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "They destroy it and reject it";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('jkKrGircves=', 1020, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "They keep it as a symbol of authority";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion11()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 10;
    var weight = DecodeNumber('VIyDunZF1MA=', 1022, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VIyDunZF1MA=', 1022, -1000, 1000),DecodeDecimal('l6Q/WJNCrmk=', 1022, -1000, 1000),DecodeDecimal('l6Q/WJNCrmk=', 1022, -1000, 1000));
    question.answers.length = 0;
    question.num = 11;
    question.isSingleAns = false;
    question.shortTextQuestion = "What happens when Ralph and Jack meet at Castle Rock?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('VIyDunZF1MA=', 1024, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "They agree to share leadership";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('MzYeA3c5cI8=', 1026, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Ralph tries to reason with Jack";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1ALUiopHuf8=', 1028, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Jack agrees to return the glasses";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('fgpUFqYBXvQ=', 1030, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "They fight over leadership";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion12()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 11;
    var weight = DecodeNumber('TAJv0pbsiJU=', 1032, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('TAJv0pbsiJU=', 1032, -1000, 1000),DecodeDecimal('QQJKP8bubzw=', 1032, -1000, 1000),DecodeDecimal('QQJKP8bubzw=', 1032, -1000, 1000));
    question.answers.length = 0;
    question.num = 12;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Piggy try to do when the boys turn violent?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('TAJv0pbsiJU=', 1034, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He appeals to the conch for peace";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KdaM9sF4IZI=', 1036, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He tries to escape";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/J+251TfGE4=', 1038, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He tries to reason with Jack and his tribe";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('maNx2evlxVI=', 1040, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He threatens to call for help";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion13()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 12;
    var weight = DecodeNumber('28wITarx3XU=', 1042, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('28wITarx3XU=', 1042, -1000, 1000),DecodeDecimal('Ptjm5QqFdJ4=', 1042, -1000, 1000),DecodeDecimal('Ptjm5QqFdJ4=', 1042, -1000, 1000));
    question.answers.length = 0;
    question.num = 13;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is the result of the confrontation at Castle Rock?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('28wITarx3XU=', 1044, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Ralph is captured and imprisoned";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('6bSSab5ZXGk=', 1046, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Piggy is killed by a falling boulder";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Yo6b5LmmNN0=', 1048, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Jack's tribe steals all their supplies";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Mh/TEK1INJ4=', 1050, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Ralph and Piggy are killed";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion14()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 13;
    var weight = DecodeNumber('w8J9nlr7wzo=', 1052, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('w8J9nlr7wzo=', 1052, -1000, 1000),DecodeDecimal('eaIPkSwl0Ks=', 1052, -1000, 1000),DecodeDecimal('eaIPkSwl0Ks=', 1052, -1000, 1000));
    question.answers.length = 0;
    question.num = 14;
    question.isSingleAns = false;
    question.shortTextQuestion = "What happens to Samneric at the end of this chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('w8J9nlr7wzo=', 1054, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "They are captured and imprisoned";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/7sEwGM6jiM=', 1056, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "They are killed in the chaos";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('WmmCsRbz1BA=', 1058, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "They join Jack's tribe";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('CzqIEoZ5qEE=', 1060, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "They escape with Ralph";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion15()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 14;
    var weight = DecodeNumber('8GmBGzV320w=', 1062, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('8GmBGzV320w=', 1062, -1000, 1000),DecodeDecimal('LmFuo8LC7AM=', 1062, -1000, 1000),DecodeDecimal('LmFuo8LC7AM=', 1062, -1000, 1000));
    question.answers.length = 0;
    question.num = 15;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is Ralph's greatest fear in the final chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('8GmBGzV320w=', 1064, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Jack becoming the permanent leader";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aFqYiwa2NZU=', 1066, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Being abandoned by Samneric";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LBcUFXDtrQ0=', 1068, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Losing his dignity and humanity";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('D2PARzE6JuQ=', 1070, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Dying alone on the island";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion16()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 15;
    var weight = DecodeNumber('jAWEJ0vyS+E=', 1072, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jAWEJ0vyS+E=', 1072, -1000, 1000),DecodeDecimal('drfAoo30CTI=', 1072, -1000, 1000),DecodeDecimal('drfAoo30CTI=', 1072, -1000, 1000));
    question.answers.length = 0;
    question.num = 16;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who saves Ralph at the end of the novel?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('jAWEJ0vyS+E=', 1074, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The boys from the other island";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Fd8EYMJPsDs=', 1076, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A naval officer";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+HSaeLtbwEQ=', 1078, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Samneric";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('uDyaMGM70Fo=', 1080, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Jack's tribe";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion17()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 16;
    var weight = DecodeNumber('tOHmAUS1aSw=', 1082, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('tOHmAUS1aSw=', 1082, -1000, 1000),DecodeDecimal('6nq6vZvcFMU=', 1082, -1000, 1000),DecodeDecimal('6nq6vZvcFMU=', 1082, -1000, 1000));
    question.answers.length = 0;
    question.num = 17;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is the boy with the mulberry birthmark concerned about?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('tOHmAUS1aSw=', 1084, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The conch shell ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('le9Za4JbWgE=', 1086, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Lack of food";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('cI2nerSVCGk=', 1088, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A beastie or snake-thing";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('QVfnnWx+Ub8=', 1090, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "His parents";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion18()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 17;
    var weight = DecodeNumber('kGCZ0ZJIWdk=', 1092, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kGCZ0ZJIWdk=', 1092, -1000, 1000),DecodeDecimal('ePho7w8jdiU=', 1092, -1000, 1000),DecodeDecimal('ePho7w8jdiU=', 1092, -1000, 1000));
    question.answers.length = 0;
    question.num = 18;
    question.isSingleAns = false;
    question.shortTextQuestion = "What do the boys use to start the fire?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kGCZ0ZJIWdk=', 1094, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Jack's knife";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('HipUGznFyt0=', 1096, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Flint stones";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0ZPh9Dc+Z2Q=', 1098, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Piggy's glasses";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('X2TdHLOYVUg=', 1100, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Matches";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion19()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 18;
    var weight = DecodeNumber('zxnEvF5gu/k=', 1102, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('zxnEvF5gu/k=', 1102, -1000, 1000),DecodeDecimal('oI5eZNlqh20=', 1102, -1000, 1000),DecodeDecimal('oI5eZNlqh20=', 1102, -1000, 1000));
    question.answers.length = 0;
    question.num = 19;
    question.isSingleAns = false;
    question.shortTextQuestion = "What happens to the fire the boys start?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('zxnEvF5gu/k=', 1104, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "It is immediately useful";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('IRvJ7ChCfjI=', 1106, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "It spreads out of control";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('iBioNdUnCjI=', 1108, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "It smokes but doesn't catch";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('S1Ctj2DTakU=', 1110, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "It is put out by rain";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion20()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 19;
    var weight = DecodeNumber('dIQKXzF/NZE=', 1112, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('dIQKXzF/NZE=', 1112, -1000, 1000),DecodeDecimal('1w3f8eDhN7o=', 1112, -1000, 1000),DecodeDecimal('1w3f8eDhN7o=', 1112, -1000, 1000));
    question.answers.length = 0;
    question.num = 20;
    question.isSingleAns = false;
    question.shortTextQuestion = "What do the boys chant after the fire?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('dIQKXzF/NZE=', 1114, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "\"Smoke and rescue!\"";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('536UbUgLGt8=', 1116, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "They don't chant";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+NaFdu/JHyw=', 1118, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "\"Kill the pig!\"";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('KTeJSH+Pqv8=', 1120, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "\"We are free!\"";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion21()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 20;
    var weight = DecodeNumber('MDBp+0dKcnY=', 1122, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('MDBp+0dKcnY=', 1122, -1000, 1000),DecodeDecimal('86f1is5ylsU=', 1122, -1000, 1000),DecodeDecimal('86f1is5ylsU=', 1122, -1000, 1000));
    question.answers.length = 0;
    question.num = 21;
    question.isSingleAns = false;
    question.shortTextQuestion = "Why is Jack focused on hunting?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('MDBp+0dKcnY=', 1124, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "To prepare for winter";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8CSEKH98XIc=', 1126, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "To satisfy his growing bloodlust";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('E6FOrJEA2OE=', 1128, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "To feed Piggy";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('UuAi/KnIfI4=', 1130, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "To prove he's better than Ralph";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion22()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 21;
    var weight = DecodeNumber('eH027nMRc1o=', 1132, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('eH027nMRc1o=', 1132, -1000, 1000),DecodeDecimal('haIuvtzLvLs=', 1132, -1000, 1000),DecodeDecimal('haIuvtzLvLs=', 1132, -1000, 1000));
    question.answers.length = 0;
    question.num = 22;
    question.isSingleAns = false;
    question.shortTextQuestion = "Where does Simon go at the end of the chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('eH027nMRc1o=', 1134, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "To the fire site";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('lIx1AC0Bu+E=', 1136, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Into the forest";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('snUrbNSorc8=', 1138, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Back to camp";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('H73v53lmPXI=', 1140, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Into the sea";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion23()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 22;
    var weight = DecodeNumber('ZUvAhdre+Vs=', 1142, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ZUvAhdre+Vs=', 1142, -1000, 1000),DecodeDecimal('n3411bgrslA=', 1142, -1000, 1000),DecodeDecimal('n3411bgrslA=', 1142, -1000, 1000));
    question.answers.length = 0;
    question.num = 23;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Ralph view the littluns?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ZUvAhdre+Vs=', 1144, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "As future hunters";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KR8fNa5ISPg=', 1146, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "As annoying pests";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Nu7VyNwezXU=', 1148, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "As needing protection";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('YR+h1zwNt/Y=', 1150, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "As a distraction";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion24()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 23;
    var weight = DecodeNumber('eoSWqClcBgE=', 1152, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('eoSWqClcBgE=', 1152, -1000, 1000),DecodeDecimal('RR9exMPJI2o=', 1152, -1000, 1000),DecodeDecimal('RR9exMPJI2o=', 1152, -1000, 1000));
    question.answers.length = 0;
    question.num = 24;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does the relationship between Ralph and Jack begin to shift?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('eoSWqClcBgE=', 1154, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Ralph joins the hunters";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zfF5h69WJsw=', 1156, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Tension grows due to differing priorities";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5UZveJ1G4MI=', 1158, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Jack becomes Ralph's lieutenant";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('nuwBU0/M4Gw=', 1160, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "They grow closer";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion25()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 24;
    var weight = DecodeNumber('kRvvN65BQdA=', 1162, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kRvvN65BQdA=', 1162, -1000, 1000),DecodeDecimal('Q49tk5mTRVk=', 1162, -1000, 1000),DecodeDecimal('Q49tk5mTRVk=', 1162, -1000, 1000));
    question.answers.length = 0;
    question.num = 25;
    question.isSingleAns = false;
    question.shortTextQuestion = "What happens to the signal fire in this chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kRvvN65BQdA=', 1164, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "It grows uncontrollable and sets part of the island on fire";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('WWry3PUk8eE=', 1166, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "It is rekindled by Piggy";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('j2kSZNxsHl4=', 1168, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "It burns out because Jack and the hunters are too focused on hunting";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Y0rEYHr759s=', 1170, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "It is extinguished by rain";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion26()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 25;
    var weight = DecodeNumber('PLQl4yMh7UA=', 1172, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('PLQl4yMh7UA=', 1172, -1000, 1000),DecodeDecimal('erHG8TKwjNo=', 1172, -1000, 1000),DecodeDecimal('erHG8TKwjNo=', 1172, -1000, 1000));
    question.answers.length = 0;
    question.num = 26;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Jack do to his face?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('PLQl4yMh7UA=', 1174, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Puts on a mask";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jeeBK/DjPj4=', 1176, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Covers it with leaves";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sofc0uAlrxU=', 1178, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Scratches it with a knife";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('4DxHPDSh5VQ=', 1180, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Paints it with clay and charcoal";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion27()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 26;
    var weight = DecodeNumber('nH9H7GA+g80=', 1182, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('nH9H7GA+g80=', 1182, -1000, 1000),DecodeDecimal('aqZpnYRfYOE=', 1182, -1000, 1000),DecodeDecimal('aqZpnYRfYOE=', 1182, -1000, 1000));
    question.answers.length = 0;
    question.num = 27;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is Ralph's reaction when he sees the boys playing instead of working?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('nH9H7GA+g80=', 1184, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He decides to join in their play";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gT6LkdHw5hY=', 1186, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He starts hunting";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('knrBqSBpM10=', 1188, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He laughs along with them";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MKUI/4Fcy9U=', 1190, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He is furious";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion28()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 27;
    var weight = DecodeNumber('he7faXfr9zI=', 1192, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('he7faXfr9zI=', 1192, -1000, 1000),DecodeDecimal('UHylVUwW9Z4=', 1192, -1000, 1000),DecodeDecimal('UHylVUwW9Z4=', 1192, -1000, 1000));
    question.answers.length = 0;
    question.num = 28;
    question.isSingleAns = false;
    question.shortTextQuestion = "What happens when the boys kill the first pig?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('he7faXfr9zI=', 1194, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "They immediately start cooking it";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OiLS11MV2oU=', 1196, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "They cry";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('HF1aqJs0KqE=', 1198, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "They perform a ritualistic dance and chant";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('LeDy9B2mgDo=', 1200, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "They feel guilty";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion29()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 28;
    var weight = DecodeNumber('fpT3YhjBdvk=', 1202, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fpT3YhjBdvk=', 1202, -1000, 1000),DecodeDecimal('Xi3SN+UalhA=', 1202, -1000, 1000),DecodeDecimal('Xi3SN+UalhA=', 1202, -1000, 1000));
    question.answers.length = 0;
    question.num = 29;
    question.isSingleAns = false;
    question.shortTextQuestion = "What new rule does Ralph establish in this chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fpT3YhjBdvk=', 1204, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "No one can leave the camp without informing others";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('tc1v9LYB8RY=', 1206, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Boys must sleep in the shelters every night";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('usXihO0rUYc=', 1208, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The fire must always be kept burning";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Hny1UuDDI8w=', 1210, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "No one is allowed to hunt without permission";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion30()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 29;
    var weight = DecodeNumber('4h2Hsom0BJg=', 1212, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('4h2Hsom0BJg=', 1212, -1000, 1000),DecodeDecimal('lQV7jY2XNmo=', 1212, -1000, 1000),DecodeDecimal('lQV7jY2XNmo=', 1212, -1000, 1000));
    question.answers.length = 0;
    question.num = 30;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Piggy suggest about the beast?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('4h2Hsom0BJg=', 1214, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "It lives in the jungle and must be killed";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GiSrByJm2ag=', 1216, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "It is an enemy tribe";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('vJNWOq5xj9M=', 1218, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "It is a real animal that must be hunted";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('SlEJMj1z+tc=', 1220, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "It's a figment of their imagination";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion31()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 30;
    var weight = DecodeNumber('T4NU21GNCQA=', 1222, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('T4NU21GNCQA=', 1222, -1000, 1000),DecodeDecimal('yHOtdSrhwRY=', 1222, -1000, 1000),DecodeDecimal('yHOtdSrhwRY=', 1222, -1000, 1000));
    question.answers.length = 0;
    question.num = 31;
    question.isSingleAns = false;
    question.shortTextQuestion = "How do the boys react to the idea of a beast?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('T4NU21GNCQA=', 1224, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "They decide to worship it";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+MKyS5pTXCo=', 1226, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "They start searching for it";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('GEqzIcF0OfU=', 1228, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "They begin to panic and fear it";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('wNBHSo09i6c=', 1230, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "They dismiss it immediately";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion32()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 31;
    var weight = DecodeNumber('I0lsOvG+z1Y=', 1232, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('I0lsOvG+z1Y=', 1232, -1000, 1000),DecodeDecimal('gZhWyM1SwKs=', 1232, -1000, 1000),DecodeDecimal('gZhWyM1SwKs=', 1232, -1000, 1000));
    question.answers.length = 0;
    question.num = 32;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Piggy fear will happen if they continue to fight?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('I0lsOvG+z1Y=', 1234, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "They will end up killing each other";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('de5bkZBXaiY=', 1236, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "They will never be able to make a fire again";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('UC5VAuuvzzU=', 1238, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "They will run out of food";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('e9xnkqEjXO0=', 1240, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "They will get rescued";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion33()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 32;
    var weight = DecodeNumber('1qhx3KpkGmQ=', 1242, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('1qhx3KpkGmQ=', 1242, -1000, 1000),DecodeDecimal('pX0WYER8WH8=', 1242, -1000, 1000),DecodeDecimal('pX0WYER8WH8=', 1242, -1000, 1000));
    question.answers.length = 0;
    question.num = 33;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is Ralph's main priority at the end of the meeting?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('1qhx3KpkGmQ=', 1244, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "To escape the island";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('N2eKckw8mhc=', 1246, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "To prepare for a feast";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4ZQ975p3mqM=', 1248, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "To keep the group united";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('I+4jOXI3TOo=', 1250, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "To find the beast";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion34()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 33;
    var weight = DecodeNumber('bCWubp0MWcc=', 1252, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('bCWubp0MWcc=', 1252, -1000, 1000),DecodeDecimal('4cWW6p1sDY8=', 1252, -1000, 1000),DecodeDecimal('4cWW6p1sDY8=', 1252, -1000, 1000));
    question.answers.length = 0;
    question.num = 34;
    question.isSingleAns = false;
    question.shortTextQuestion = "What happens to the parachutist's body?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('bCWubp0MWcc=', 1254, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "It floats away in the wind";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5qp1DdXtc3M=', 1256, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "It is immediately carried off by Jack?s tribe";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0BV5+gWdn/c=', 1258, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "It is mistaken for the beast";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('gTZxOo1Xqog=', 1260, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "It is discovered by Ralph";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion35()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 34;
    var weight = DecodeNumber('dl6EtE2wSOo=', 1262, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('dl6EtE2wSOo=', 1262, -1000, 1000),DecodeDecimal('zssWKipaOTs=', 1262, -1000, 1000),DecodeDecimal('zssWKipaOTs=', 1262, -1000, 1000));
    question.answers.length = 0;
    question.num = 35;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Jack say about the beast in this chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('dl6EtE2wSOo=', 1264, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "That they should worship it";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('8T1yHEPq/Lw=', 1266, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "That the beast is actually a man";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('vs0TuSQdH+E=', 1268, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "That he will hunt it down";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('7jNoNQAAG+0=', 1270, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "That it is a figment of their imagination";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion36()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 35;
    var weight = DecodeNumber('imxuRUrydVU=', 1272, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('imxuRUrydVU=', 1272, -1000, 1000),DecodeDecimal('u8yqZv28n2o=', 1272, -1000, 1000),DecodeDecimal('u8yqZv28n2o=', 1272, -1000, 1000));
    question.answers.length = 0;
    question.num = 36;
    question.isSingleAns = false;
    question.shortTextQuestion = "What happens to the fire at the beginning of the chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('imxuRUrydVU=', 1274, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "It is neglected and fades away";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4IpSqlbHcK0=', 1276, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "It is accidentally started by Jack's tribe";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TiK80h63YpI=', 1278, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "It grows larger and larger";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('JRku8OeEGO4=', 1280, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "It burns out";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion37()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 36;
    var weight = DecodeNumber('UTotUDs//OU=', 1282, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('UTotUDs//OU=', 1282, -1000, 1000),DecodeDecimal('6cDpcfcOaew=', 1282, -1000, 1000),DecodeDecimal('6cDpcfcOaew=', 1282, -1000, 1000));
    question.answers.length = 0;
    question.num = 37;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is Ralph's biggest concern at the end of the chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('UTotUDs//OU=', 1284, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The state of the fire";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('uVEtEzNgLCs=', 1286, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The boys losing focus and becoming more savage";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0MUGd4i3ay8=', 1288, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "His own safety";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('f97BKkSYPtU=', 1290, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The lack of food";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion38()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 37;
    var weight = DecodeNumber('QhnXV/UkJSk=', 1292, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('QhnXV/UkJSk=', 1292, -1000, 1000),DecodeDecimal('5/7WlpCMBk0=', 1292, -1000, 1000),DecodeDecimal('5/7WlpCMBk0=', 1292, -1000, 1000));
    question.answers.length = 0;
    question.num = 38;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who starts the chant \"Kill the pig! Cut her throat! Spill her blood!\"?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('QhnXV/UkJSk=', 1294, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Simon";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('ynmX35ne1gs=', 1296, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Jack";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nu7bSl2VZd0=', 1298, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Ralph";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('z0fUq/AYliI=', 1300, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Piggy";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion39()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 38;
    var weight = DecodeNumber('7J5hOtA/k1M=', 1302, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7J5hOtA/k1M=', 1302, -1000, 1000),DecodeDecimal('jWCO4F1Ky2I=', 1302, -1000, 1000),DecodeDecimal('jWCO4F1Ky2I=', 1302, -1000, 1000));
    question.answers.length = 0;
    question.num = 39;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Ralph feel after the boar hunt?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('7J5hOtA/k1M=', 1304, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Indifferent";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('sQjGo9jMafI=', 1306, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Exhausted and scared";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+fGRIJKJuVk=', 1308, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Horrified by the violence";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('2Tol85HdyvQ=', 1310, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Proud and exhilarated";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion40()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 39;
    var weight = DecodeNumber('yXtSZtJXfUg=', 1312, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('yXtSZtJXfUg=', 1312, -1000, 1000),DecodeDecimal('H0wu6JwdGoU=', 1312, -1000, 1000),DecodeDecimal('H0wu6JwdGoU=', 1312, -1000, 1000));
    question.answers.length = 0;
    question.num = 40;
    question.isSingleAns = false;
    question.shortTextQuestion = "What happens when the boys reenact the hunt on Robert?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yXtSZtJXfUg=', 1314, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "They feel guilty and apologize";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xi703HTprDw=', 1316, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "They get bored and stop the chant";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('x0W07JpbZoQ=', 1318, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "They stop immediately when he cries out";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('qVIyGhFu02g=', 1320, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "They nearly kill him";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion41()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 40;
    var weight = DecodeNumber('rawNW4iMKu8=', 1322, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('rawNW4iMKu8=', 1322, -1000, 1000),DecodeDecimal('b2mvClgRF/g=', 1322, -1000, 1000),DecodeDecimal('b2mvClgRF/g=', 1322, -1000, 1000));
    question.answers.length = 0;
    question.num = 41;
    question.isSingleAns = false;
    question.shortTextQuestion = "What vision does Ralph have during the hunt?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rawNW4iMKu8=', 1324, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The boys turning into savages";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('U6jTWsu3OJM=', 1326, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Himself as a great leader";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+xdLLw2LTIM=', 1328, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The island being destroyed by fire";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('EshpAJzyrcU=', 1330, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The boys being rescued";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion42()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 41;
    var weight = DecodeNumber('hKwSyT/3EgA=', 1332, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hKwSyT/3EgA=', 1332, -1000, 1000),DecodeDecimal('66sBNzEtH58=', 1332, -1000, 1000),DecodeDecimal('66sBNzEtH58=', 1332, -1000, 1000));
    question.answers.length = 0;
    question.num = 42;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is Simon's role in the group by the end of this chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('hKwSyT/3EgA=', 1334, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He becomes the most powerful figure among the boys";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jHvgoF3vcVw=', 1336, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He begins to form his own tribe";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('FPMo5s99FZQ=', 1338, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He is regarded as a potential leader";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('mEIzG1yZQbg=', 1340, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He is treated as an outsider";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion43()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 42;
    var weight = DecodeNumber('V9NXSWcXJLE=', 1342, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('V9NXSWcXJLE=', 1342, -1000, 1000),DecodeDecimal('eZ0eoJir8OU=', 1342, -1000, 1000),DecodeDecimal('eZ0eoJir8OU=', 1342, -1000, 1000));
    question.answers.length = 0;
    question.num = 43;
    question.isSingleAns = false;
    question.shortTextQuestion = "What do the boys use to symbolize their new tribe?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('V9NXSWcXJLE=', 1344, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A carved idol";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('YB/LOU3csXo=', 1346, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A painted banner";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('nYE55DOZ+FQ=', 1348, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A boar's head on a stick";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('RwJCUxy0mxo=', 1350, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The conch";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion44()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 43;
    var weight = DecodeNumber('ceZJRC3d1/E=', 1352, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ceZJRC3d1/E=', 1352, -1000, 1000),DecodeDecimal('nK5IPAMgH9o=', 1352, -1000, 1000),DecodeDecimal('nK5IPAMgH9o=', 1352, -1000, 1000));
    question.answers.length = 0;
    question.num = 44;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is the significance of the \"Lord of the Flies\" in the chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ceZJRC3d1/E=', 1354, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "It symbolizes hope for civilization";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zDl00AjD5hs=', 1356, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "It marks the beginning of their rescue";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('S/A6AlOTBFU=', 1358, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "It symbolizes the boys' descent into savagery";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('eq+YxPDusao=', 1360, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "It represents the boys' unity";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion45()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 44;
    var weight = DecodeNumber('Ht9Lfqo3BZI=', 1362, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Ht9Lfqo3BZI=', 1362, -1000, 1000),DecodeDecimal('XA/wiN+4Y1M=', 1362, -1000, 1000),DecodeDecimal('XA/wiN+4Y1M=', 1362, -1000, 1000));
    question.answers.length = 0;
    question.num = 45;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Piggy react to the idea of a beast?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Ht9Lfqo3BZI=', 1364, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He accepts that the beast exists";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('IDjtm1wIcvQ=', 1366, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He tries to rationalize and dismisses it logically";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Tog5kXFOHcY=', 1368, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He becomes afraid and starts crying";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('OpyZ1R3mFiQ=', 1370, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He dismisses it and laughs it off";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion46()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 45;
    var weight = DecodeNumber('RwP2u4SwwmM=', 1372, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('RwP2u4SwwmM=', 1372, -1000, 1000),DecodeDecimal('VkNh4GqhUCo=', 1372, -1000, 1000),DecodeDecimal('VkNh4GqhUCo=', 1372, -1000, 1000));
    question.answers.length = 0;
    question.num = 46;
    question.isSingleAns = false;
    question.shortTextQuestion = "What symbolic act does Simon engage in during this chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('RwP2u4SwwmM=', 1374, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He offers a prayer for rescue";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('SmUNiungGk4=', 1376, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He faces the \"Lord of the Flies\" in a hallucination";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('UkXd+MjrDnA=', 1378, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He speaks the truth about the beast";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('PKQyD8DLXrs=', 1380, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He builds a hut in the jungle";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion47()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 46;
    var weight = DecodeNumber('ViOdQXhA+a8=', 1382, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ViOdQXhA+a8=', 1382, -1000, 1000),DecodeDecimal('3xSpUxp/3UM=', 1382, -1000, 1000),DecodeDecimal('3xSpUxp/3UM=', 1382, -1000, 1000));
    question.answers.length = 0;
    question.num = 47;
    question.isSingleAns = false;
    question.shortTextQuestion = "How do the boys react when they kill Simon?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ViOdQXhA+a8=', 1384, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "They carry his body to the ocean";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KoOnI8eYeqQ=', 1386, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "They immediately flee in fear";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('VFp8+BTxf4A=', 1388, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "They continue to dance in excitement";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('K2IPJ2OTPrs=', 1390, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "They realize their mistake and feel guilty";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion48()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 47;
    var weight = DecodeNumber('PgfApEgAzfI=', 1392, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('PgfApEgAzfI=', 1392, -1000, 1000),DecodeDecimal('di5ydwwKVMM=', 1392, -1000, 1000),DecodeDecimal('di5ydwwKVMM=', 1392, -1000, 1000));
    question.answers.length = 0;
    question.num = 48;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is Simon trying to reveal to the boys before his death?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('PgfApEgAzfI=', 1394, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "That they are all in danger";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Ll8RVDAa7oM=', 1396, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "That Ralph is the true leader";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('p8fK7OX3dkE=', 1398, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "That they must escape the island";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Atm5Qr9tyy8=', 1400, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The truth about the beast";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion49()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 48;
    var weight = DecodeNumber('xWxQHtpmg30=', 1402, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xWxQHtpmg30=', 1402, -1000, 1000),DecodeDecimal('5MsW6bUI3ZY=', 1402, -1000, 1000),DecodeDecimal('5MsW6bUI3ZY=', 1402, -1000, 1000));
    question.answers.length = 0;
    question.num = 49;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does the death of Simon symbolize in the novel?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('xWxQHtpmg30=', 1404, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The arrival of rescue";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PVed6hjMgqY=', 1406, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The triumph of order over chaos";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('P7gafMCyyQA=', 1408, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The end of innocence";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('uueMV/S0NI0=', 1410, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The death of hope";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion50()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 49;
    var weight = DecodeNumber('3m664JdFung=', 1412, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3m664JdFung=', 1412, -1000, 1000),DecodeDecimal('CFTJxlPQun4=', 1412, -1000, 1000),DecodeDecimal('CFTJxlPQun4=', 1412, -1000, 1000));
    question.answers.length = 0;
    question.num = 50;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does the natural world react to Simon's death?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('3m664JdFung=', 1414, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "The animals grow more peaceful";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VDP9Ef3z9PI=', 1416, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "The island begins to burn";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('v0xHdsGZlf4=', 1418, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The storm worsens";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('knDl7Mvf8X4=', 1420, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The sea becomes calm";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion51()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 50;
    var weight = DecodeNumber('/lkpOuGET2Q=', 1422, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('geEpooftY4k=', 1422, -1000, 1000),DecodeDecimal('z+9LaD9yhBE=', 1422, -1000, 1000),DecodeDecimal('z+9LaD9yhBE=', 1422, -1000, 1000));
    question.num = 51;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 5 (about 120 words)";
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
    var weight = DecodeNumber('2W5kKGFnyGg=', 1432, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('MJcRruH0gxE=', 1432, -1000, 1000),DecodeDecimal('/lkpOuGET2Q=', 1432, -1000, 1000),DecodeDecimal('/lkpOuGET2Q=', 1432, -1000, 1000));
    question.num = 52;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 12 (about 120 words)";
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







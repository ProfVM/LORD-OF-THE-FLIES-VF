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
    var weight = DecodeNumber('k93HVCw7YnE=', 683, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('k93HVCw7YnE=', 683, -1000, 1000),DecodeDecimal('a36e/Sh5ZCE=', 683, -1000, 1000),DecodeDecimal('a36e/Sh5ZCE=', 683, -1000, 1000));
    question.answers.length = 0;
    question.num = 1;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who is elected chief by the boys?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('k93HVCw7YnE=', 685, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('a36e/Sh5ZCE=', 683, -9999, 99999), DecodeNumber('a36e/Sh5ZCE=', 683, -9999, 99999), '');
    answer1.shortTextAnswer = "Simon";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dvffZmoz4sY=', 687, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('wQe0eJOPTHs=', 685, -9999, 99999), DecodeNumber('wQe0eJOPTHs=', 685, -9999, 99999), '');
    answer2.shortTextAnswer = "Piggy";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hKfdaj5xgr4=', 689, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('AnklMXmuPLE=', 687, -9999, 99999), DecodeNumber('S91nXxl4k74=', 687, -9999, 99999), '');
    answer3.shortTextAnswer = "Ralph";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('hKfdaj5xgr4=', 691, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('RgnzYWL6mzY=', 689, -9999, 99999), DecodeNumber('RgnzYWL6mzY=', 689, -9999, 99999), '');
    answer4.shortTextAnswer = "Jack";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 1;
    var weight = DecodeNumber('QswWzl0HbA8=', 693, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('QswWzl0HbA8=', 693, -1000, 1000),DecodeDecimal('7F0pNtyb0tk=', 693, -1000, 1000),DecodeDecimal('7F0pNtyb0tk=', 693, -1000, 1000));
    question.answers.length = 0;
    question.num = 2;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is Piggy?s main physical ailment?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('QswWzl0HbA8=', 695, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('7F0pNtyb0tk=', 693, -9999, 99999), DecodeNumber('7F0pNtyb0tk=', 693, -9999, 99999), '');
    answer1.shortTextAnswer = "A limp";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('PSz117klqHY=', 697, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('f8VoAmslhv0=', 695, -9999, 99999), DecodeNumber('f8VoAmslhv0=', 695, -9999, 99999), '');
    answer2.shortTextAnswer = "Blindness ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BqsM00dEzGs=', 699, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('9/+wTX9TiZs=', 697, -9999, 99999), DecodeNumber('9/+wTX9TiZs=', 697, -9999, 99999), '');
    answer3.shortTextAnswer = "Deafness";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('9pB87GX/gGw=', 701, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('GDWtVhBVoRk=', 699, -9999, 99999), DecodeNumber('mB0V342Dgf8=', 699, -9999, 99999), '');
    answer4.shortTextAnswer = "Asthma";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 2;
    var weight = DecodeNumber('FaE9f1W3NA0=', 703, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FaE9f1W3NA0=', 703, -1000, 1000),DecodeDecimal('MgfZDhR1Tx0=', 703, -1000, 1000),DecodeDecimal('MgfZDhR1Tx0=', 703, -1000, 1000));
    question.answers.length = 0;
    question.num = 3;
    question.isSingleAns = false;
    question.shortTextQuestion = "Why does Jack believe he should be leader?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('SO/yhedJrn0=', 705, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Taxlev4QIv8=', 703, -9999, 99999), DecodeNumber('MgfZDhR1Tx0=', 703, -9999, 99999), '');
    answer1.shortTextAnswer = "He?s head of the choir";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('SO/yhedJrn0=', 707, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('2GwDY4rQ1Ik=', 705, -9999, 99999), DecodeNumber('2GwDY4rQ1Ik=', 705, -9999, 99999), '');
    answer2.shortTextAnswer = "He?s the strongest";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pkLeeIiYIpU=', 709, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('5JdySpHhqaw=', 707, -9999, 99999), DecodeNumber('5JdySpHhqaw=', 707, -9999, 99999), '');
    answer3.shortTextAnswer = "He found the conch";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('TAZ2Pzy06WM=', 711, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('jPSsvItqzAQ=', 709, -9999, 99999), DecodeNumber('jPSsvItqzAQ=', 709, -9999, 99999), '');
    answer4.shortTextAnswer = "He has military experience";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 3;
    var weight = DecodeNumber('0ZyrJWdOMfU=', 713, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0ZyrJWdOMfU=', 713, -1000, 1000),DecodeDecimal('beDzosRG6Z4=', 713, -1000, 1000),DecodeDecimal('beDzosRG6Z4=', 713, -1000, 1000));
    question.answers.length = 0;
    question.num = 4;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Piggy want the boys to do at the first meeting?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('SFBEGguuxN4=', 715, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('3TgH2JeJm5Q=', 713, -9999, 99999), DecodeNumber('beDzosRG6Z4=', 713, -9999, 99999), '');
    answer1.shortTextAnswer = "Take names and keep order";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('SFBEGguuxN4=', 717, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('FogHmsoCcxw=', 715, -9999, 99999), DecodeNumber('FogHmsoCcxw=', 715, -9999, 99999), '');
    answer2.shortTextAnswer = "Elect a king";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('mxtL9CNxJlQ=', 719, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('rEC0fyPbsz0=', 717, -9999, 99999), DecodeNumber('rEC0fyPbsz0=', 717, -9999, 99999), '');
    answer3.shortTextAnswer = "Start building huts";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('0LexHuj0P1s=', 721, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('iFgSM9VTUzg=', 719, -9999, 99999), DecodeNumber('iFgSM9VTUzg=', 719, -9999, 99999), '');
    answer4.shortTextAnswer = "Make weapons";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 4;
    var weight = DecodeNumber('fVCjGqkxWcQ=', 723, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fVCjGqkxWcQ=', 723, -1000, 1000),DecodeDecimal('sqqFHnex6ns=', 723, -1000, 1000),DecodeDecimal('sqqFHnex6ns=', 723, -1000, 1000));
    question.answers.length = 0;
    question.num = 5;
    question.isSingleAns = false;
    question.shortTextQuestion = "Which of the following best describes Jack?s first reaction to leadership loss?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('TXaCVb3S7q4=', 725, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('1o9uIjsPgrM=', 723, -9999, 99999), DecodeNumber('sqqFHnex6ns=', 723, -9999, 99999), '');
    answer1.shortTextAnswer = "He reluctantly accepts it";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('TXaCVb3S7q4=', 727, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('Ns4sic1IcjE=', 725, -9999, 99999), DecodeNumber('Ns4sic1IcjE=', 725, -9999, 99999), '');
    answer2.shortTextAnswer = "He attacks Ralph";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('QTVio9oeXyo=', 729, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('nRmW8ne2Izs=', 727, -9999, 99999), DecodeNumber('nRmW8ne2Izs=', 727, -9999, 99999), '');
    answer3.shortTextAnswer = "He cries";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('9f5nTLchHI0=', 731, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('pdDkux6qUfI=', 729, -9999, 99999), DecodeNumber('pdDkux6qUfI=', 729, -9999, 99999), '');
    answer4.shortTextAnswer = "He storms off";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 5;
    var weight = DecodeNumber('ABHDI2jz2XY=', 92, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ABHDI2jz2XY=', 92, -1000, 1000),DecodeDecimal('ro+TaeNs10s=', 92, -1000, 1000),DecodeDecimal('ro+TaeNs10s=', 92, -1000, 1000));
    question.answers.length = 0;
    question.num = 6;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who is left with Ralph and Piggy after Simon?s death?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ABHDI2jz2XY=', 94, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('ro+TaeNs10s=', 92, -9999, 99999), DecodeNumber('ro+TaeNs10s=', 92, -9999, 99999), '');
    answer1.shortTextAnswer = "Only Piggy";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('x0NB1jhghaU=', 96, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('zifsuQ9W5B4=', 94, -9999, 99999), DecodeNumber('zifsuQ9W5B4=', 94, -9999, 99999), '');
    answer2.shortTextAnswer = "Jack and his followers";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1ADcgahIOe8=', 98, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('fbg8HsE3pfg=', 96, -9999, 99999), DecodeNumber('fbg8HsE3pfg=', 96, -9999, 99999), '');
    answer3.shortTextAnswer = "No one; they are abandoned";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('gt3CH9rrImk=', 100, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('ibbRXJKXcTw=', 98, -9999, 99999), DecodeNumber('XbLEs4D+4PE=', 98, -9999, 99999), '');
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
    var weight = DecodeNumber('lg48kTodRMg=', 102, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('lg48kTodRMg=', 102, -1000, 1000),DecodeDecimal('Htnjx5UA+HM=', 102, -1000, 1000),DecodeDecimal('Htnjx5UA+HM=', 102, -1000, 1000));
    question.answers.length = 0;
    question.num = 7;
    question.isSingleAns = false;
    question.shortTextQuestion = "How do Jack?s followers treat Ralph and Piggy after Simon?s death?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('lg48kTodRMg=', 104, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Htnjx5UA+HM=', 102, -9999, 99999), DecodeNumber('Htnjx5UA+HM=', 102, -9999, 99999), '');
    answer1.shortTextAnswer = "They accept them into the group";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('TtZ73WWJ0R4=', 106, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('SFWqloyWjko=', 104, -9999, 99999), DecodeNumber('SFWqloyWjko=', 104, -9999, 99999), '');
    answer2.shortTextAnswer = "They show respect to them";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+trtNRyh5gU=', 108, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('iM8tLLI4tls=', 106, -9999, 99999), DecodeNumber('ldcq2y8vxiw=', 106, -9999, 99999), '');
    answer3.shortTextAnswer = "They try to kill them";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('+trtNRyh5gU=', 110, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('RA7Mk7tPywE=', 108, -9999, 99999), DecodeNumber('RA7Mk7tPywE=', 108, -9999, 99999), '');
    answer4.shortTextAnswer = "They refuse to speak to them";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion8()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 7;
    var weight = DecodeNumber('Xe7VHe+PCn8=', 112, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Xe7VHe+PCn8=', 112, -1000, 1000),DecodeDecimal('dw/R/Jhyh3Y=', 112, -1000, 1000),DecodeDecimal('dw/R/Jhyh3Y=', 112, -1000, 1000));
    question.answers.length = 0;
    question.num = 8;
    question.isSingleAns = false;
    question.shortTextQuestion = "What happens to Piggy?s glasses in this chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('uvZTA58E3X4=', 114, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Bcr7mCm3kMM=', 112, -9999, 99999), DecodeNumber('dw/R/Jhyh3Y=', 112, -9999, 99999), '');
    answer1.shortTextAnswer = "They are stolen by Jack";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('uvZTA58E3X4=', 116, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('lzCz6sJPXdk=', 114, -9999, 99999), DecodeNumber('lzCz6sJPXdk=', 114, -9999, 99999), '');
    answer2.shortTextAnswer = "They are used to start the fire";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lWseE6JLwF0=', 118, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('RxCcvUDcpZI=', 116, -9999, 99999), DecodeNumber('RxCcvUDcpZI=', 116, -9999, 99999), '');
    answer3.shortTextAnswer = "They break";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Dmwy8ZdKrns=', 120, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('i38o2KaXniA=', 118, -9999, 99999), DecodeNumber('i38o2KaXniA=', 118, -9999, 99999), '');
    answer4.shortTextAnswer = "They are lost in the fire";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion9()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 8;
    var weight = DecodeNumber('UkMUHJtv1RI=', 122, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('UkMUHJtv1RI=', 122, -1000, 1000),DecodeDecimal('0vLQ9ulhqko=', 122, -1000, 1000),DecodeDecimal('0vLQ9ulhqko=', 122, -1000, 1000));
    question.answers.length = 0;
    question.num = 9;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Ralph struggle with in this chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('B01gdcu2diA=', 124, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('NKWHIqBwyaA=', 122, -9999, 99999), DecodeNumber('0vLQ9ulhqko=', 122, -9999, 99999), '');
    answer1.shortTextAnswer = "Losing control of the group";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('B01gdcu2diA=', 126, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('QJCR12VGxyo=', 124, -9999, 99999), DecodeNumber('QJCR12VGxyo=', 124, -9999, 99999), '');
    answer2.shortTextAnswer = "His own desire to hunt";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('BeoqfS+oqEk=', 128, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('y1eCL9hGOlQ=', 126, -9999, 99999), DecodeNumber('y1eCL9hGOlQ=', 126, -9999, 99999), '');
    answer3.shortTextAnswer = "The guilt over Simon?s death";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('uV3hBxLBzJo=', 130, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('BMCy734t8bY=', 128, -9999, 99999), DecodeNumber('BMCy734t8bY=', 128, -9999, 99999), '');
    answer4.shortTextAnswer = "His growing fear of Jack";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion10()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 9;
    var weight = DecodeNumber('rkeNzUztNko=', 132, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('rkeNzUztNko=', 132, -1000, 1000),DecodeDecimal('cD9kUXGiwZo=', 132, -1000, 1000),DecodeDecimal('cD9kUXGiwZo=', 132, -1000, 1000));
    question.answers.length = 0;
    question.num = 10;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Ralph say about the group?s behavior in this chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('rkeNzUztNko=', 134, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('cD9kUXGiwZo=', 132, -9999, 99999), DecodeNumber('cD9kUXGiwZo=', 132, -9999, 99999), '');
    answer1.shortTextAnswer = "They are still a civilized group of boys";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('16qztrg7tVs=', 136, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('/124z/Xm/iY=', 134, -9999, 99999), DecodeNumber('/124z/Xm/iY=', 134, -9999, 99999), '');
    answer2.shortTextAnswer = "They are closer to rescue than ever";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('3aY9zaCM1lA=', 138, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('p+P2c189Wmw=', 136, -9999, 99999), DecodeNumber('K8lWfoWc6PU=', 136, -9999, 99999), '');
    answer3.shortTextAnswer = "They are descending into savagery";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('3aY9zaCM1lA=', 140, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('7YOlhpG31sw=', 138, -9999, 99999), DecodeNumber('7YOlhpG31sw=', 138, -9999, 99999), '');
    answer4.shortTextAnswer = "They are growing more peaceful";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion11()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 10;
    var weight = DecodeNumber('Nf9C+SvpBDE=', 142, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Nf9C+SvpBDE=', 142, -1000, 1000),DecodeDecimal('n1jiv0S2rXA=', 142, -1000, 1000),DecodeDecimal('n1jiv0S2rXA=', 142, -1000, 1000));
    question.answers.length = 0;
    question.num = 11;
    question.isSingleAns = false;
    question.shortTextQuestion = "Why do Ralph and Piggy go to Castle Rock?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('FYY0zweLJnU=', 144, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('l8ZF8AM2qWM=', 142, -9999, 99999), DecodeNumber('n1jiv0S2rXA=', 142, -9999, 99999), '');
    answer1.shortTextAnswer = "To negotiate with Jack for the return of Piggy?s glasses";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('FYY0zweLJnU=', 146, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('AzZ6Kt+zYhw=', 144, -9999, 99999), DecodeNumber('AzZ6Kt+zYhw=', 144, -9999, 99999), '');
    answer2.shortTextAnswer = "To escape from the island";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0RRLPs2hnpg=', 148, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('ZrkKLP077lI=', 146, -9999, 99999), DecodeNumber('ZrkKLP077lI=', 146, -9999, 99999), '');
    answer3.shortTextAnswer = "To ask Jack to join them and rebuild the shelters";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('BWzjwy89jJI=', 150, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('mn68gqlvghE=', 148, -9999, 99999), DecodeNumber('mn68gqlvghE=', 148, -9999, 99999), '');
    answer4.shortTextAnswer = "To plead for the return of the conch";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion12()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 11;
    var weight = DecodeNumber('QeL9u/S2Jbw=', 152, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('QeL9u/S2Jbw=', 152, -1000, 1000),DecodeDecimal('dArUhYTQl88=', 152, -1000, 1000),DecodeDecimal('dArUhYTQl88=', 152, -1000, 1000));
    question.answers.length = 0;
    question.num = 12;
    question.isSingleAns = false;
    question.shortTextQuestion = "What happens when Ralph and Jack meet at Castle Rock?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('QeL9u/S2Jbw=', 154, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('dArUhYTQl88=', 152, -9999, 99999), DecodeNumber('dArUhYTQl88=', 152, -9999, 99999), '');
    answer1.shortTextAnswer = "They fight over leadership";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('UMHjzN4hG5w=', 156, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('l5tm7EvpptI=', 154, -9999, 99999), DecodeNumber('l5tm7EvpptI=', 154, -9999, 99999), '');
    answer2.shortTextAnswer = "They agree to share leadership";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('O2Hie86zl5s=', 158, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('JqP2P4wzDc0=', 156, -9999, 99999), DecodeNumber('JqP2P4wzDc0=', 156, -9999, 99999), '');
    answer3.shortTextAnswer = "Jack agrees to return the glasses";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('KHxzB23cHrw=', 160, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('bgjG1j0DbDY=', 158, -9999, 99999), DecodeNumber('nEGuUh5Rnr8=', 158, -9999, 99999), '');
    answer4.shortTextAnswer = "Ralph tries to reason with Jack";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion13()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 12;
    var weight = DecodeNumber('fbgKLKBvewk=', 162, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fbgKLKBvewk=', 162, -1000, 1000),DecodeDecimal('roSgiUN5GCc=', 162, -1000, 1000),DecodeDecimal('roSgiUN5GCc=', 162, -1000, 1000));
    question.answers.length = 0;
    question.num = 13;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Jack react when Ralph blows the conch?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('fbgKLKBvewk=', 164, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('roSgiUN5GCc=', 162, -9999, 99999), DecodeNumber('roSgiUN5GCc=', 162, -9999, 99999), '');
    answer1.shortTextAnswer = "He respects the call and listens";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qQNB9L9MtBM=', 166, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('a5OBVasbrCw=', 164, -9999, 99999), DecodeNumber('a5OBVasbrCw=', 164, -9999, 99999), '');
    answer2.shortTextAnswer = "He tries to destroy the conch";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NQ6pkro5nmQ=', 168, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('s12srHGEjQI=', 166, -9999, 99999), DecodeNumber('s12srHGEjQI=', 166, -9999, 99999), '');
    answer3.shortTextAnswer = "He laughs and ignores it";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('PHpzTzp8oOA=', 170, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('yN8nCcYe+zw=', 168, -9999, 99999), DecodeNumber('v9WS0zPdeQw=', 168, -9999, 99999), '');
    answer4.shortTextAnswer = "He becomes angry and orders the boys to kill Ralph";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion14()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 13;
    var weight = DecodeNumber('gtxSgNNkIR4=', 172, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('gtxSgNNkIR4=', 172, -1000, 1000),DecodeDecimal('iDqHKYdPr2o=', 172, -1000, 1000),DecodeDecimal('iDqHKYdPr2o=', 172, -1000, 1000));
    question.answers.length = 0;
    question.num = 14;
    question.isSingleAns = false;
    question.shortTextQuestion = "What happens to the conch in this chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('gtxSgNNkIR4=', 174, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('iDqHKYdPr2o=', 172, -9999, 99999), DecodeNumber('iDqHKYdPr2o=', 172, -9999, 99999), '');
    answer1.shortTextAnswer = "It is lost during the fight";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/U+ZiiWnR3g=', 176, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('B99sWE3FxC8=', 174, -9999, 99999), DecodeNumber('B99sWE3FxC8=', 174, -9999, 99999), '');
    answer2.shortTextAnswer = "It is taken by Jack as a trophy";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('OcNIHSyCZ/E=', 178, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('0AEVl9cnI2Y=', 176, -9999, 99999), DecodeNumber('NUFA2wFyolY=', 176, -9999, 99999), '');
    answer3.shortTextAnswer = "It is crushed by the falling boulder";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('OcNIHSyCZ/E=', 180, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('EysncH327NI=', 178, -9999, 99999), DecodeNumber('EysncH327NI=', 178, -9999, 99999), '');
    answer4.shortTextAnswer = "It is given to Ralph as a symbol of leadership";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion15()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 14;
    var weight = DecodeNumber('MSx/AN1oM3Y=', 182, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('MSx/AN1oM3Y=', 182, -1000, 1000),DecodeDecimal('YukCu1AfqRc=', 182, -1000, 1000),DecodeDecimal('YukCu1AfqRc=', 182, -1000, 1000));
    question.answers.length = 0;
    question.num = 15;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Ralph do to try to escape the hunters?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('MSx/AN1oM3Y=', 184, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('YukCu1AfqRc=', 182, -9999, 99999), DecodeNumber('YukCu1AfqRc=', 182, -9999, 99999), '');
    answer1.shortTextAnswer = "He hides in the jungle";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('kF4cJQu5tU4=', 186, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('ecMSHFvL3ro=', 184, -9999, 99999), DecodeNumber('ecMSHFvL3ro=', 184, -9999, 99999), '');
    answer2.shortTextAnswer = "He fights Jack and his tribe";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wn9bSD9YyiM=', 188, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('2J50RNNv9a8=', 186, -9999, 99999), DecodeNumber('2J50RNNv9a8=', 186, -9999, 99999), '');
    answer3.shortTextAnswer = "He tries to swim to another island";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('UvNH3aVaCe8=', 190, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('IOctUYb9vOA=', 188, -9999, 99999), DecodeNumber('z4EL+DPTRkw=', 188, -9999, 99999), '');
    answer4.shortTextAnswer = "He runs toward the beach, hoping for rescue";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion16()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 15;
    var weight = DecodeNumber('0sCRgwQw0hE=', 192, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0sCRgwQw0hE=', 192, -1000, 1000),DecodeDecimal('myD+o84E4gg=', 192, -1000, 1000),DecodeDecimal('myD+o84E4gg=', 192, -1000, 1000));
    question.answers.length = 0;
    question.num = 16;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who saves Ralph at the end of the novel?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('0sCRgwQw0hE=', 194, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('myD+o84E4gg=', 192, -9999, 99999), DecodeNumber('myD+o84E4gg=', 192, -9999, 99999), '');
    answer1.shortTextAnswer = "Jack?s tribe";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qD1HevwzGxI=', 196, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('eNKu5X9f1Iw=', 194, -9999, 99999), DecodeNumber('eNKu5X9f1Iw=', 194, -9999, 99999), '');
    answer2.shortTextAnswer = "The boys from the other island";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CdcEzZrjLFE=', 198, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('RD2iWKPHfCs=', 196, -9999, 99999), DecodeNumber('RD2iWKPHfCs=', 196, -9999, 99999), '');
    answer3.shortTextAnswer = "Samneric";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('0oALC4csydw=', 200, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('MKNfAeoVGhc=', 198, -9999, 99999), DecodeNumber('ibbRXJKXcTw=', 198, -9999, 99999), '');
    answer4.shortTextAnswer = "A naval officer";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion17()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 16;
    var weight = DecodeNumber('DIF7xPXApQ8=', 202, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DIF7xPXApQ8=', 202, -1000, 1000),DecodeDecimal('sAwze1FdbQ0=', 202, -1000, 1000),DecodeDecimal('sAwze1FdbQ0=', 202, -1000, 1000));
    question.answers.length = 0;
    question.num = 17;
    question.isSingleAns = false;
    question.shortTextQuestion = "What rule does Ralph establish at the second meeting?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('DIF7xPXApQ8=', 204, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('sAwze1FdbQ0=', 202, -9999, 99999), DecodeNumber('sAwze1FdbQ0=', 202, -9999, 99999), '');
    answer1.shortTextAnswer = "Only Jack can hunt";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('oEvZRmRMPok=', 206, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('rFVGnamPw6c=', 204, -9999, 99999), DecodeNumber('rFVGnamPw6c=', 204, -9999, 99999), '');
    answer2.shortTextAnswer = "The group will build treehouses";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Z3ITUlgFo94=', 208, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('iM8tLLI4tls=', 206, -9999, 99999), DecodeNumber('iM8tLLI4tls=', 206, -9999, 99999), '');
    answer3.shortTextAnswer = "No one goes into the jungle alone";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('As0/RiLLqBU=', 210, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('y0qqjtuy1qU=', 208, -9999, 99999), DecodeNumber('Y8MCw5e+Jok=', 208, -9999, 99999), '');
    answer4.shortTextAnswer = "Only the person with the conch may speak";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion18()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 17;
    var weight = DecodeNumber('liBAAWqZfu0=', 212, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('liBAAWqZfu0=', 212, -1000, 1000),DecodeDecimal('Bcr7mCm3kMM=', 212, -1000, 1000),DecodeDecimal('Bcr7mCm3kMM=', 212, -1000, 1000));
    question.answers.length = 0;
    question.num = 18;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is the boy with the mulberry birthmark concerned about?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('liBAAWqZfu0=', 214, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Bcr7mCm3kMM=', 212, -9999, 99999), DecodeNumber('Bcr7mCm3kMM=', 212, -9999, 99999), '');
    answer1.shortTextAnswer = "His parents";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KdXze8RmZUI=', 216, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('PpK27psZswI=', 214, -9999, 99999), DecodeNumber('PpK27psZswI=', 214, -9999, 99999), '');
    answer2.shortTextAnswer = "The conch shell ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lzMjmOoCQ7M=', 218, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('PjaSgGaPJlI=', 216, -9999, 99999), DecodeNumber('jYNlJhZDosY=', 216, -9999, 99999), '');
    answer3.shortTextAnswer = "A ?beastie? or snake-thing";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('lzMjmOoCQ7M=', 220, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('pVqGCtMqejA=', 218, -9999, 99999), DecodeNumber('pVqGCtMqejA=', 218, -9999, 99999), '');
    answer4.shortTextAnswer = "Lack of food";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion19()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 18;
    var weight = DecodeNumber('zid1bPeiSxI=', 222, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('zid1bPeiSxI=', 222, -1000, 1000),DecodeDecimal('NKWHIqBwyaA=', 222, -1000, 1000),DecodeDecimal('NKWHIqBwyaA=', 222, -1000, 1000));
    question.answers.length = 0;
    question.num = 19;
    question.isSingleAns = false;
    question.shortTextQuestion = "What do the boys attempt to build on the mountain?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('zid1bPeiSxI=', 224, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('NKWHIqBwyaA=', 222, -9999, 99999), DecodeNumber('NKWHIqBwyaA=', 222, -9999, 99999), '');
    answer1.shortTextAnswer = "A tower";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('lgXWzacnZyE=', 226, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('Omeo0E9LsOc=', 224, -9999, 99999), DecodeNumber('Omeo0E9LsOc=', 224, -9999, 99999), '');
    answer2.shortTextAnswer = "A hut";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('K9w9GTzw0U0=', 228, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('m7L7yTaRXow=', 226, -9999, 99999), DecodeNumber('m7L7yTaRXow=', 226, -9999, 99999), '');
    answer3.shortTextAnswer = "A dam";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ukGZQHwzzsk=', 230, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('7mDaX9SGDAw=', 228, -9999, 99999), DecodeNumber('B0abIykF82o=', 228, -9999, 99999), '');
    answer4.shortTextAnswer = "A fire for rescue";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion20()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 19;
    var weight = DecodeNumber('op7Jgf02A+w=', 232, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('op7Jgf02A+w=', 232, -1000, 1000),DecodeDecimal('ZIx4uu7SW4Q=', 232, -1000, 1000),DecodeDecimal('ZIx4uu7SW4Q=', 232, -1000, 1000));
    question.answers.length = 0;
    question.num = 20;
    question.isSingleAns = false;
    question.shortTextQuestion = "What tragic event possibly occurs due to the fire?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('op7Jgf02A+w=', 234, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('ZIx4uu7SW4Q=', 232, -9999, 99999), DecodeNumber('ZIx4uu7SW4Q=', 232, -9999, 99999), '');
    answer1.shortTextAnswer = "Ralph is injured";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5s0ApaIuiJM=', 236, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('UCrDsfq6BRA=', 234, -9999, 99999), DecodeNumber('UCrDsfq6BRA=', 234, -9999, 99999), '');
    answer2.shortTextAnswer = "The conch is lost";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('OkVoEtcjW24=', 238, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('p+P2c189Wmw=', 236, -9999, 99999), DecodeNumber('p+P2c189Wmw=', 236, -9999, 99999), '');
    answer3.shortTextAnswer = "Piggy loses his glasses";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('apb6teX5K+A=', 240, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('EJ6etrlg4U0=', 238, -9999, 99999), DecodeNumber('Eg8xYWZTV6A=', 238, -9999, 99999), '');
    answer4.shortTextAnswer = "The boy with the birthmark disappears";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion21()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 20;
    var weight = DecodeNumber('bn/ZufkWl4Q=', 242, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('bn/ZufkWl4Q=', 242, -1000, 1000),DecodeDecimal('l8ZF8AM2qWM=', 242, -1000, 1000),DecodeDecimal('l8ZF8AM2qWM=', 242, -1000, 1000));
    question.answers.length = 0;
    question.num = 21;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is Ralph frustrated about in this chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('bn/ZufkWl4Q=', 244, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('l8ZF8AM2qWM=', 242, -9999, 99999), DecodeNumber('l8ZF8AM2qWM=', 242, -9999, 99999), '');
    answer1.shortTextAnswer = "Not enough food";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('QUtdRd5DYVY=', 246, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('kvAKRCNlfhs=', 244, -9999, 99999), DecodeNumber('kvAKRCNlfhs=', 244, -9999, 99999), '');
    answer2.shortTextAnswer = "His inability to swim";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('w4IY3foijLQ=', 248, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('ADh6xAj5FAM=', 246, -9999, 99999), DecodeNumber('ADh6xAj5FAM=', 246, -9999, 99999), '');
    answer3.shortTextAnswer = "Jack taking his power";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('01StUIqWq8A=', 250, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('QtMHJdgDOS0=', 248, -9999, 99999), DecodeNumber('JCBwlWJFGww=', 248, -9999, 99999), '');
    answer4.shortTextAnswer = "The boys? lack of help building huts";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion22()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 21;
    var weight = DecodeNumber('VP6Wkumt/Eo=', 252, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VP6Wkumt/Eo=', 252, -1000, 1000),DecodeDecimal('NVOz4VK7GIk=', 252, -1000, 1000),DecodeDecimal('NVOz4VK7GIk=', 252, -1000, 1000));
    question.answers.length = 0;
    question.num = 22;
    question.isSingleAns = false;
    question.shortTextQuestion = "Why is Jack focused on hunting?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('VP6Wkumt/Eo=', 254, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('NVOz4VK7GIk=', 252, -9999, 99999), DecodeNumber('NVOz4VK7GIk=', 252, -9999, 99999), '');
    answer1.shortTextAnswer = "To prove he?s better than Ralph";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('RVEr5+bH8to=', 256, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('oivjX6Fv0uU=', 254, -9999, 99999), DecodeNumber('oivjX6Fv0uU=', 254, -9999, 99999), '');
    answer2.shortTextAnswer = "To prepare for winter";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zn0ByC4A6uE=', 258, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('qmjsHHcWCHU=', 256, -9999, 99999), DecodeNumber('qmjsHHcWCHU=', 256, -9999, 99999), '');
    answer3.shortTextAnswer = "To feed Piggy";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('i1sfUQC3t98=', 260, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('z0OjqRwnfmA=', 258, -9999, 99999), DecodeNumber('bgjG1j0DbDY=', 258, -9999, 99999), '');
    answer4.shortTextAnswer = "To satisfy his growing bloodlust";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion23()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 22;
    var weight = DecodeNumber('r/dDbSOBwdw=', 262, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('r/dDbSOBwdw=', 262, -1000, 1000),DecodeDecimal('AM1hyO2TXBw=', 262, -1000, 1000),DecodeDecimal('AM1hyO2TXBw=', 262, -1000, 1000));
    question.answers.length = 0;
    question.num = 23;
    question.isSingleAns = false;
    question.shortTextQuestion = "What role does Simon begin to take on?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('r/dDbSOBwdw=', 264, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('AM1hyO2TXBw=', 262, -9999, 99999), DecodeNumber('AM1hyO2TXBw=', 262, -9999, 99999), '');
    answer1.shortTextAnswer = "Leader of the hunters";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('oTkDlktJ/uw=', 266, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('fJTru7MZmnw=', 264, -9999, 99999), DecodeNumber('fJTru7MZmnw=', 264, -9999, 99999), '');
    answer2.shortTextAnswer = "Fire watcher";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('98m7D7wRJ0M=', 268, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('MMPiPOsMPHI=', 266, -9999, 99999), DecodeNumber('cyW1u/qdURw=', 266, -9999, 99999), '');
    answer3.shortTextAnswer = "Peacemaker and quiet helper";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('98m7D7wRJ0M=', 270, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('yN8nCcYe+zw=', 268, -9999, 99999), DecodeNumber('yN8nCcYe+zw=', 268, -9999, 99999), '');
    answer4.shortTextAnswer = "Keeper of the conch";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion24()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 23;
    var weight = DecodeNumber('yy0IaV+DlAI=', 272, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('yy0IaV+DlAI=', 272, -1000, 1000),DecodeDecimal('G3obncBVtzQ=', 272, -1000, 1000),DecodeDecimal('G3obncBVtzQ=', 272, -1000, 1000));
    question.answers.length = 0;
    question.num = 24;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Jack claim he feels when hunting?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('yy0IaV+DlAI=', 274, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('G3obncBVtzQ=', 272, -9999, 99999), DecodeNumber('G3obncBVtzQ=', 272, -9999, 99999), '');
    answer1.shortTextAnswer = "Peace";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('B6pZY0+6t20=', 276, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('SsAn/yNXmJQ=', 274, -9999, 99999), DecodeNumber('SsAn/yNXmJQ=', 274, -9999, 99999), '');
    answer2.shortTextAnswer = "Hunger";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('tQfeico3k70=', 278, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('TA3gqx2rHDc=', 276, -9999, 99999), DecodeNumber('0AEVl9cnI2Y=', 276, -9999, 99999), '');
    answer3.shortTextAnswer = "Something watching him";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('tQfeico3k70=', 280, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('EduUMOPpRf0=', 278, -9999, 99999), DecodeNumber('EduUMOPpRf0=', 278, -9999, 99999), '');
    answer4.shortTextAnswer = "Sadness";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion25()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 24;
    var weight = DecodeNumber('kX4E1GnLJU4=', 282, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('kX4E1GnLJU4=', 282, -1000, 1000),DecodeDecimal('BxoJN0wac9I=', 282, -1000, 1000),DecodeDecimal('BxoJN0wac9I=', 282, -1000, 1000));
    question.answers.length = 0;
    question.num = 25;
    question.isSingleAns = false;
    question.shortTextQuestion = "What happens to the signal fire in this chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('kX4E1GnLJU4=', 284, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('BxoJN0wac9I=', 282, -9999, 99999), DecodeNumber('BxoJN0wac9I=', 282, -9999, 99999), '');
    answer1.shortTextAnswer = "It is extinguished by rain";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('uekKmw3YwTI=', 286, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('ps5zgpaRW00=', 284, -9999, 99999), DecodeNumber('ps5zgpaRW00=', 284, -9999, 99999), '');
    answer2.shortTextAnswer = "It grows uncontrollable and sets part of the island on fire";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Flp2onAIyTk=', 288, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('PtSwW/gVNKk=', 286, -9999, 99999), DecodeNumber('fiE2XEztz4U=', 286, -9999, 99999), '');
    answer3.shortTextAnswer = "It burns out because Jack and the hunters are too focused on hunting";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Flp2onAIyTk=', 290, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('IOctUYb9vOA=', 288, -9999, 99999), DecodeNumber('IOctUYb9vOA=', 288, -9999, 99999), '');
    answer4.shortTextAnswer = "It is rekindled by Piggy";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion26()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 25;
    var weight = DecodeNumber('+hE6NAelZSg=', 292, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+hE6NAelZSg=', 292, -1000, 1000),DecodeDecimal('jdFio+1KgGY=', 292, -1000, 1000),DecodeDecimal('jdFio+1KgGY=', 292, -1000, 1000));
    question.answers.length = 0;
    question.num = 26;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who is responsible for maintaining the signal fire?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('m2hZisRJCi8=', 294, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('eemZzdlfgXI=', 292, -9999, 99999), DecodeNumber('jdFio+1KgGY=', 292, -9999, 99999), '');
    answer1.shortTextAnswer = "Ralph";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('m2hZisRJCi8=', 296, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('fapU6TkDFEU=', 294, -9999, 99999), DecodeNumber('fapU6TkDFEU=', 294, -9999, 99999), '');
    answer2.shortTextAnswer = "The littluns";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('FkwpyMPjNOQ=', 298, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('K1Oz6Oik3V0=', 296, -9999, 99999), DecodeNumber('K1Oz6Oik3V0=', 296, -9999, 99999), '');
    answer3.shortTextAnswer = "Jack";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('AYOFz/dTJkU=', 300, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('MKNfAeoVGhc=', 298, -9999, 99999), DecodeNumber('MKNfAeoVGhc=', 298, -9999, 99999), '');
    answer4.shortTextAnswer = "Piggy";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion27()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 26;
    var weight = DecodeNumber('jSbXvJ/bidk=', 302, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jSbXvJ/bidk=', 302, -1000, 1000),DecodeDecimal('nOWzl5UQbRc=', 302, -1000, 1000),DecodeDecimal('nOWzl5UQbRc=', 302, -1000, 1000));
    question.answers.length = 0;
    question.num = 27;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Jack do to his face?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Vf7dALvQQug=', 304, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('alJRai2xapA=', 302, -9999, 99999), DecodeNumber('nOWzl5UQbRc=', 302, -9999, 99999), '');
    answer1.shortTextAnswer = "Paints it with clay and charcoal";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Vf7dALvQQug=', 306, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('nahymvCRBmc=', 304, -9999, 99999), DecodeNumber('nahymvCRBmc=', 304, -9999, 99999), '');
    answer2.shortTextAnswer = "Puts on a mask";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lQgP5i8eUvU=', 308, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('4P3k5ARIZKw=', 306, -9999, 99999), DecodeNumber('4P3k5ARIZKw=', 306, -9999, 99999), '');
    answer3.shortTextAnswer = "Scratches it with a knife";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('KIvrHoBEK5M=', 310, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('y0qqjtuy1qU=', 308, -9999, 99999), DecodeNumber('y0qqjtuy1qU=', 308, -9999, 99999), '');
    answer4.shortTextAnswer = "Covers it with leaves";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion28()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 27;
    var weight = DecodeNumber('Xw/xJN2rNAc=', 312, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Xw/xJN2rNAc=', 312, -1000, 1000),DecodeDecimal('11awkEbh/dc=', 312, -1000, 1000),DecodeDecimal('11awkEbh/dc=', 312, -1000, 1000));
    question.answers.length = 0;
    question.num = 28;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Jack?s mask symbolize in this chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Xw/xJN2rNAc=', 314, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('11awkEbh/dc=', 312, -9999, 99999), DecodeNumber('11awkEbh/dc=', 312, -9999, 99999), '');
    answer1.shortTextAnswer = "His power over the boys";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('geZkSwEFa/k=', 316, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('8FkP8tB66xs=', 314, -9999, 99999), DecodeNumber('8FkP8tB66xs=', 314, -9999, 99999), '');
    answer2.shortTextAnswer = "His loyalty to Ralph";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('tyOlG/5esKU=', 318, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('2lMuIT7imsY=', 316, -9999, 99999), DecodeNumber('PjaSgGaPJlI=', 316, -9999, 99999), '');
    answer3.shortTextAnswer = "His descent into savagery and his desire to hide his identity";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('tyOlG/5esKU=', 320, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('LfAj9tvreAU=', 318, -9999, 99999), DecodeNumber('LfAj9tvreAU=', 318, -9999, 99999), '');
    answer4.shortTextAnswer = "His desire to get rid of Ralph";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion29()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 28;
    var weight = DecodeNumber('bt1b5pzrJ64=', 322, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('bt1b5pzrJ64=', 322, -1000, 1000),DecodeDecimal('dN8HEmv4Eqo=', 322, -1000, 1000),DecodeDecimal('dN8HEmv4Eqo=', 322, -1000, 1000));
    question.answers.length = 0;
    question.num = 29;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who is upset about the hunters? priorities?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Yc3j1k2Cpos=', 324, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Ug3n0QiltNQ=', 322, -9999, 99999), DecodeNumber('dN8HEmv4Eqo=', 322, -9999, 99999), '');
    answer1.shortTextAnswer = "Ralph";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Yc3j1k2Cpos=', 326, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('jbb9rhj0TTA=', 324, -9999, 99999), DecodeNumber('jbb9rhj0TTA=', 324, -9999, 99999), '');
    answer2.shortTextAnswer = "Maurice";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1d5UHOov0rQ=', 328, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('eUx4GpqOZC0=', 326, -9999, 99999), DecodeNumber('eUx4GpqOZC0=', 326, -9999, 99999), '');
    answer3.shortTextAnswer = "Piggy";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('+cCz9O4xHnA=', 330, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('7mDaX9SGDAw=', 328, -9999, 99999), DecodeNumber('7mDaX9SGDAw=', 328, -9999, 99999), '');
    answer4.shortTextAnswer = "Simon";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion30()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 29;
    var weight = DecodeNumber('9L0QI7WLU9I=', 332, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('9L0QI7WLU9I=', 332, -1000, 1000),DecodeDecimal('7kC8zxsO5fM=', 332, -1000, 1000),DecodeDecimal('7kC8zxsO5fM=', 332, -1000, 1000));
    question.answers.length = 0;
    question.num = 30;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Ralph try to do during the meeting in this chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9L0QI7WLU9I=', 334, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('7kC8zxsO5fM=', 332, -9999, 99999), DecodeNumber('7kC8zxsO5fM=', 332, -9999, 99999), '');
    answer1.shortTextAnswer = "Convince the boys to hunt";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7S4pbPYd7nU=', 336, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('tsv70oszQu8=', 334, -9999, 99999), DecodeNumber('tsv70oszQu8=', 334, -9999, 99999), '');
    answer2.shortTextAnswer = "Declare himself king";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Z5HUNBf3poY=', 338, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('7MCQE9o4+EY=', 336, -9999, 99999), DecodeNumber('ZSpKh4PgobU=', 336, -9999, 99999), '');
    answer3.shortTextAnswer = "Re-establish order and focus on the fire";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Z5HUNBf3poY=', 340, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('EJ6etrlg4U0=', 338, -9999, 99999), DecodeNumber('EJ6etrlg4U0=', 338, -9999, 99999), '');
    answer4.shortTextAnswer = "Create a new rule about the conch";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion31()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 30;
    var weight = DecodeNumber('iU0/ntiXfkw=', 342, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('iU0/ntiXfkw=', 342, -1000, 1000),DecodeDecimal('sHyNoCrz7mc=', 342, -1000, 1000),DecodeDecimal('sHyNoCrz7mc=', 342, -1000, 1000));
    question.answers.length = 0;
    question.num = 31;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Piggy suggest about the beast?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('82hZw4UU+2w=', 344, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('JPds8oQ/JHs=', 342, -9999, 99999), DecodeNumber('sHyNoCrz7mc=', 342, -9999, 99999), '');
    answer1.shortTextAnswer = "It?s a figment of their imagination";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('82hZw4UU+2w=', 346, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('PbFiymrjP4I=', 344, -9999, 99999), DecodeNumber('PbFiymrjP4I=', 344, -9999, 99999), '');
    answer2.shortTextAnswer = "It lives in the jungle and must be killed";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('N1InzqmTq5M=', 348, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Kuc6omgE364=', 346, -9999, 99999), DecodeNumber('Kuc6omgE364=', 346, -9999, 99999), '');
    answer3.shortTextAnswer = "It is a real animal that must be hunted";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('57bQCFpyDKQ=', 350, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('QtMHJdgDOS0=', 348, -9999, 99999), DecodeNumber('QtMHJdgDOS0=', 348, -9999, 99999), '');
    answer4.shortTextAnswer = "It is an enemy tribe";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion32()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 31;
    var weight = DecodeNumber('w9/orxS+8iE=', 352, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('w9/orxS+8iE=', 352, -1000, 1000),DecodeDecimal('JMbcjbBAxYY=', 352, -1000, 1000),DecodeDecimal('JMbcjbBAxYY=', 352, -1000, 1000));
    question.answers.length = 0;
    question.num = 32;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Simon reveal about the beast?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('w9/orxS+8iE=', 354, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('JMbcjbBAxYY=', 352, -9999, 99999), DecodeNumber('JMbcjbBAxYY=', 352, -9999, 99999), '');
    answer1.shortTextAnswer = "It is a huge, scary creature";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3ClMEIrMR0E=', 356, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('iIehWtgOSZ8=', 354, -9999, 99999), DecodeNumber('iIehWtgOSZ8=', 354, -9999, 99999), '');
    answer2.shortTextAnswer = "It is just a hallucination";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('CC13tWpFFqQ=', 358, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('1p8gtTS43s0=', 356, -9999, 99999), DecodeNumber('WrE5tTvhg98=', 356, -9999, 99999), '');
    answer3.shortTextAnswer = "It is actually the corpse of a man caught in a parachute";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('CC13tWpFFqQ=', 360, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('z0OjqRwnfmA=', 358, -9999, 99999), DecodeNumber('z0OjqRwnfmA=', 358, -9999, 99999), '');
    answer4.shortTextAnswer = "It is another group of boys";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion33()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 32;
    var weight = DecodeNumber('S1QjGeh6k8E=', 362, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('S1QjGeh6k8E=', 362, -1000, 1000),DecodeDecimal('FaL02qMW6hE=', 362, -1000, 1000),DecodeDecimal('FaL02qMW6hE=', 362, -1000, 1000));
    question.answers.length = 0;
    question.num = 33;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who suggests that they should get rid of the littluns?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('S1QjGeh6k8E=', 364, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('FaL02qMW6hE=', 362, -9999, 99999), DecodeNumber('FaL02qMW6hE=', 362, -9999, 99999), '');
    answer1.shortTextAnswer = "Piggy";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('gPU/rdMNQPU=', 366, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('/HoZiNuwEZ4=', 364, -9999, 99999), DecodeNumber('/HoZiNuwEZ4=', 364, -9999, 99999), '');
    answer2.shortTextAnswer = "Simon";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('UQleWavVELU=', 368, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Y+OklbclcvM=', 366, -9999, 99999), DecodeNumber('MMPiPOsMPHI=', 366, -9999, 99999), '');
    answer3.shortTextAnswer = "Jack";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('UQleWavVELU=', 370, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('Dogg3MdOhGs=', 368, -9999, 99999), DecodeNumber('Dogg3MdOhGs=', 368, -9999, 99999), '');
    answer4.shortTextAnswer = "Ralph";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion34()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 33;
    var weight = DecodeNumber('HMqIcBOfjRs=', 372, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('HMqIcBOfjRs=', 372, -1000, 1000),DecodeDecimal('vaA/UzBXYbs=', 372, -1000, 1000),DecodeDecimal('vaA/UzBXYbs=', 372, -1000, 1000));
    question.answers.length = 0;
    question.num = 34;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is discovered in the sky that causes fear among the boys?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('HMqIcBOfjRs=', 374, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('vaA/UzBXYbs=', 372, -9999, 99999), DecodeNumber('vaA/UzBXYbs=', 372, -9999, 99999), '');
    answer1.shortTextAnswer = "A huge storm cloud";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7LwE6tRTVv8=', 376, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('KF21nXmhOSc=', 374, -9999, 99999), DecodeNumber('KF21nXmhOSc=', 374, -9999, 99999), '');
    answer2.shortTextAnswer = "A UFO";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zl4cAd0z3fU=', 378, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('y6jVrb4IvPU=', 376, -9999, 99999), DecodeNumber('TA3gqx2rHDc=', 376, -9999, 99999), '');
    answer3.shortTextAnswer = "A plane with a pilot parachuting out";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('zl4cAd0z3fU=', 380, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('yRhAPgopCB4=', 378, -9999, 99999), DecodeNumber('yRhAPgopCB4=', 378, -9999, 99999), '');
    answer4.shortTextAnswer = "A large bird";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion35()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 34;
    var weight = DecodeNumber('+aJrc5ktky4=', 382, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('+aJrc5ktky4=', 382, -1000, 1000),DecodeDecimal('nl+ZfTrEY+E=', 382, -1000, 1000),DecodeDecimal('nl+ZfTrEY+E=', 382, -1000, 1000));
    question.answers.length = 0;
    question.num = 35;
    question.isSingleAns = false;
    question.shortTextQuestion = "What happens to the parachutist?s body?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+aJrc5ktky4=', 384, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('nl+ZfTrEY+E=', 382, -9999, 99999), DecodeNumber('nl+ZfTrEY+E=', 382, -9999, 99999), '');
    answer1.shortTextAnswer = "It is discovered by Ralph";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('CZs3O5CSuXI=', 386, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('hGv5nsbgcXo=', 384, -9999, 99999), DecodeNumber('hGv5nsbgcXo=', 384, -9999, 99999), '');
    answer2.shortTextAnswer = "It floats away in the wind";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('UyFd2FUqhwY=', 388, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('qdewDA5HQFU=', 386, -9999, 99999), DecodeNumber('PtSwW/gVNKk=', 386, -9999, 99999), '');
    answer3.shortTextAnswer = "It is mistaken for the beast";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('UyFd2FUqhwY=', 390, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('sv8DKq4Aq4A=', 388, -9999, 99999), DecodeNumber('sv8DKq4Aq4A=', 388, -9999, 99999), '');
    answer4.shortTextAnswer = "It is immediately carried off by Jack?s tribe";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion36()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 35;
    var weight = DecodeNumber('YiBle76ozTc=', 392, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('YiBle76ozTc=', 392, -1000, 1000),DecodeDecimal('eemZzdlfgXI=', 392, -1000, 1000),DecodeDecimal('eemZzdlfgXI=', 392, -1000, 1000));
    question.answers.length = 0;
    question.num = 36;
    question.isSingleAns = false;
    question.shortTextQuestion = "How do the boys react when they see the body of the parachutist?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('AdYKY2MpcOA=', 394, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('cWNVMw1vYWA=', 392, -9999, 99999), DecodeNumber('eemZzdlfgXI=', 392, -9999, 99999), '');
    answer1.shortTextAnswer = "They think it?s a monster and become terrified";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('AdYKY2MpcOA=', 396, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('f+TPcHQ4Dt8=', 394, -9999, 99999), DecodeNumber('f+TPcHQ4Dt8=', 394, -9999, 99999), '');
    answer2.shortTextAnswer = "They ignore it completely";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/WnE34QxtDw=', 398, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('VneeceS2Lrk=', 396, -9999, 99999), DecodeNumber('VneeceS2Lrk=', 396, -9999, 99999), '');
    answer3.shortTextAnswer = "They decide to investigate it";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('lWGqRwz9LW8=', 400, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('zQw/uXPUm50=', 398, -9999, 99999), DecodeNumber('zQw/uXPUm50=', 398, -9999, 99999), '');
    answer4.shortTextAnswer = "They are confused and don?t understand it";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion37()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 36;
    var weight = DecodeNumber('/lg5VbcW2LA=', 402, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('/lg5VbcW2LA=', 402, -1000, 1000),DecodeDecimal('alJRai2xapA=', 402, -1000, 1000),DecodeDecimal('alJRai2xapA=', 402, -1000, 1000));
    question.answers.length = 0;
    question.num = 37;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who suggests the idea of the beast in the ocean?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('/lg5VbcW2LA=', 404, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('alJRai2xapA=', 402, -9999, 99999), DecodeNumber('alJRai2xapA=', 402, -9999, 99999), '');
    answer1.shortTextAnswer = "Ralph";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('1Y1Mx0o/N5U=', 406, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('+oyb5eYroVw=', 404, -9999, 99999), DecodeNumber('22PO1XFWj6M=', 404, -9999, 99999), '');
    answer2.shortTextAnswer = "Samneric";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1Y1Mx0o/N5U=', 408, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('aBCv6rbtGS0=', 406, -9999, 99999), DecodeNumber('aBCv6rbtGS0=', 406, -9999, 99999), '');
    answer3.shortTextAnswer = "Piggy";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('lVpMJTttdcE=', 410, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('SYY/t6/waJ0=', 408, -9999, 99999), DecodeNumber('SYY/t6/waJ0=', 408, -9999, 99999), '');
    answer4.shortTextAnswer = "Jack";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion38()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 37;
    var weight = DecodeNumber('GJ8EqvwWDvI=', 412, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('GJ8EqvwWDvI=', 412, -1000, 1000),DecodeDecimal('GTksrifun5g=', 412, -1000, 1000),DecodeDecimal('GTksrifun5g=', 412, -1000, 1000));
    question.answers.length = 0;
    question.num = 38;
    question.isSingleAns = false;
    question.shortTextQuestion = "What happens when Ralph strikes the boar with his spear?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('GJ8EqvwWDvI=', 414, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('GTksrifun5g=', 412, -9999, 99999), DecodeNumber('GTksrifun5g=', 412, -9999, 99999), '');
    answer1.shortTextAnswer = "He kills it immediately and the boys take it to the camp";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('TRKDp4uq4ww=', 416, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('Bnc908BxrLQ=', 414, -9999, 99999), DecodeNumber('Bnc908BxrLQ=', 414, -9999, 99999), '');
    answer2.shortTextAnswer = "He misses it completely and the boys blame him";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('APqlnbnz/vk=', 418, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('4DRtnq/WfOI=', 416, -9999, 99999), DecodeNumber('2lMuIT7imsY=', 416, -9999, 99999), '');
    answer3.shortTextAnswer = "He injures it and the boys excitedly hunt it down";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('APqlnbnz/vk=', 420, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('ym7v81xD1yI=', 418, -9999, 99999), DecodeNumber('ym7v81xD1yI=', 418, -9999, 99999), '');
    answer4.shortTextAnswer = "The boar escapes and the boys feel disappointed";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion39()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 38;
    var weight = DecodeNumber('6aPzvg67MuQ=', 422, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('6aPzvg67MuQ=', 422, -1000, 1000),DecodeDecimal('Ug3n0QiltNQ=', 422, -1000, 1000),DecodeDecimal('Ug3n0QiltNQ=', 422, -1000, 1000));
    question.answers.length = 0;
    question.num = 39;
    question.isSingleAns = false;
    question.shortTextQuestion = "Who starts the chant ?Kill the pig! Cut her throat! Spill her blood!??";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('6aPzvg67MuQ=', 424, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('Ug3n0QiltNQ=', 422, -9999, 99999), DecodeNumber('Ug3n0QiltNQ=', 422, -9999, 99999), '');
    answer1.shortTextAnswer = "Piggy";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('n+4phR7KBas=', 426, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('XB7rd8woVvA=', 424, -9999, 99999), DecodeNumber('XB7rd8woVvA=', 424, -9999, 99999), '');
    answer2.shortTextAnswer = "Simon";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('owDJvhIekTY=', 428, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('eGGi/zlz/78=', 426, -9999, 99999), DecodeNumber('eGGi/zlz/78=', 426, -9999, 99999), '');
    answer3.shortTextAnswer = "Ralph";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('0B9LzcTbsAA=', 430, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('LU3PbpOmkg8=', 428, -9999, 99999), DecodeNumber('XEyBpWyHMKA=', 428, -9999, 99999), '');
    answer4.shortTextAnswer = "Jack";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion40()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 39;
    var weight = DecodeNumber('T5kOMTj505Y=', 432, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('T5kOMTj505Y=', 432, -1000, 1000),DecodeDecimal('eNvrrpBFIxw=', 432, -1000, 1000),DecodeDecimal('eNvrrpBFIxw=', 432, -1000, 1000));
    question.answers.length = 0;
    question.num = 40;
    question.isSingleAns = false;
    question.shortTextQuestion = "What happens when the boys reenact the hunt on Robert?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('HgjSfHmlmFs=', 434, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('wXzT1uNaeog=', 432, -9999, 99999), DecodeNumber('eNvrrpBFIxw=', 432, -9999, 99999), '');
    answer1.shortTextAnswer = "They nearly kill him";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('HgjSfHmlmFs=', 436, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('pVCawmjr9Qo=', 434, -9999, 99999), DecodeNumber('pVCawmjr9Qo=', 434, -9999, 99999), '');
    answer2.shortTextAnswer = "They feel guilty and apologize";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ib8fU/zVmPw=', 438, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('7MCQE9o4+EY=', 436, -9999, 99999), DecodeNumber('7MCQE9o4+EY=', 436, -9999, 99999), '');
    answer3.shortTextAnswer = "They stop immediately when he cries out";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ItkvMLlTJrA=', 440, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('Caf6z8tD0E4=', 438, -9999, 99999), DecodeNumber('Caf6z8tD0E4=', 438, -9999, 99999), '');
    answer4.shortTextAnswer = "They get bored and stop the chant";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion41()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 40;
    var weight = DecodeNumber('zM2oTp0ArBU=', 442, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('zM2oTp0ArBU=', 442, -1000, 1000),DecodeDecimal('JPds8oQ/JHs=', 442, -1000, 1000),DecodeDecimal('JPds8oQ/JHs=', 442, -1000, 1000));
    question.answers.length = 0;
    question.num = 41;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Simon do during the boys? reenactment of the hunt?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('zM2oTp0ArBU=', 444, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('JPds8oQ/JHs=', 442, -9999, 99999), DecodeNumber('JPds8oQ/JHs=', 442, -9999, 99999), '');
    answer1.shortTextAnswer = "He tries to stop them";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bUK6tHfq7Ww=', 446, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('l4Up6kHYPVA=', 444, -9999, 99999), DecodeNumber('l4Up6kHYPVA=', 444, -9999, 99999), '');
    answer2.shortTextAnswer = "He runs away in fear";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KgIJ3DAG1vY=', 448, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('hpiOPZleMLg=', 446, -9999, 99999), DecodeNumber('hpiOPZleMLg=', 446, -9999, 99999), '');
    answer3.shortTextAnswer = "He joins in and participates";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('OWzL4td+eRQ=', 450, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('8Y4/nSFTvIc=', 448, -9999, 99999), DecodeNumber('/jrPAKGc82A=', 448, -9999, 99999), '');
    answer4.shortTextAnswer = "He quietly observes from a distance";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion42()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 41;
    var weight = DecodeNumber('aX1GR+t2zvQ=', 452, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('aX1GR+t2zvQ=', 452, -1000, 1000),DecodeDecimal('QyM5TcP9fxw=', 452, -1000, 1000),DecodeDecimal('QyM5TcP9fxw=', 452, -1000, 1000));
    question.answers.length = 0;
    question.num = 42;
    question.isSingleAns = false;
    question.shortTextQuestion = "How does Jack react to Ralph?s leadership during the hunt?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('aX1GR+t2zvQ=', 454, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('QyM5TcP9fxw=', 452, -9999, 99999), DecodeNumber('QyM5TcP9fxw=', 452, -9999, 99999), '');
    answer1.shortTextAnswer = "He respects Ralph?s leadership";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nPOx9X0gNP0=', 456, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('naiWmpibCro=', 454, -9999, 99999), DecodeNumber('naiWmpibCro=', 454, -9999, 99999), '');
    answer2.shortTextAnswer = "He expresses admiration for Ralph";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('oAEfQAFeq3Q=', 458, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('WBjw81VHalE=', 456, -9999, 99999), DecodeNumber('1p8gtTS43s0=', 456, -9999, 99999), '');
    answer3.shortTextAnswer = "He tries to challenge Ralph for control";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('oAEfQAFeq3Q=', 460, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('bBEHlGSZgDk=', 458, -9999, 99999), DecodeNumber('bBEHlGSZgDk=', 458, -9999, 99999), '');
    answer4.shortTextAnswer = "He stays silent but resents Ralph";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion43()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 42;
    var weight = DecodeNumber('Vitx5wwzpps=', 462, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Vitx5wwzpps=', 462, -1000, 1000),DecodeDecimal('HlTpT0LBwq8=', 462, -1000, 1000),DecodeDecimal('HlTpT0LBwq8=', 462, -1000, 1000));
    question.answers.length = 0;
    question.num = 43;
    question.isSingleAns = false;
    question.shortTextQuestion = "What do the boys use to symbolize their new tribe?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('Vitx5wwzpps=', 464, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('HlTpT0LBwq8=', 462, -9999, 99999), DecodeNumber('HlTpT0LBwq8=', 462, -9999, 99999), '');
    answer1.shortTextAnswer = "The conch";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('phwDSCornPQ=', 466, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('lK58iWbcPKo=', 464, -9999, 99999), DecodeNumber('lK58iWbcPKo=', 464, -9999, 99999), '');
    answer2.shortTextAnswer = "A carved idol";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Uo1o5s6XadI=', 468, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('wwptpBJ3nRM=', 466, -9999, 99999), DecodeNumber('Y+OklbclcvM=', 466, -9999, 99999), '');
    answer3.shortTextAnswer = "A boar?s head on a stick";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Uo1o5s6XadI=', 470, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('2QPuyZqZeLw=', 468, -9999, 99999), DecodeNumber('2QPuyZqZeLw=', 468, -9999, 99999), '');
    answer4.shortTextAnswer = "A painted banner";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion44()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 43;
    var weight = DecodeNumber('cxe96MNXXUU=', 472, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('cxe96MNXXUU=', 472, -1000, 1000),DecodeDecimal('pSens0/tgB8=', 472, -1000, 1000),DecodeDecimal('pSens0/tgB8=', 472, -1000, 1000));
    question.answers.length = 0;
    question.num = 44;
    question.isSingleAns = false;
    question.shortTextQuestion = "Why does Jack offer a gift to the beast?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('cxe96MNXXUU=', 474, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('pSens0/tgB8=', 472, -9999, 99999), DecodeNumber('pSens0/tgB8=', 472, -9999, 99999), '');
    answer1.shortTextAnswer = "To show his power over the island";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('I9/UlPfKV3c=', 476, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('2MzAMFGFb7c=', 474, -9999, 99999), DecodeNumber('2MzAMFGFb7c=', 474, -9999, 99999), '');
    answer2.shortTextAnswer = "To frighten the other boys and take control of the group";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('r/sQVX2wE9s=', 478, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('tjw3gh2HNQs=', 476, -9999, 99999), DecodeNumber('y6jVrb4IvPU=', 476, -9999, 99999), '');
    answer3.shortTextAnswer = "To appease the beast and ensure the tribe?s safety";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('r/sQVX2wE9s=', 480, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('iBIsdm01FN4=', 478, -9999, 99999), DecodeNumber('iBIsdm01FN4=', 478, -9999, 99999), '');
    answer4.shortTextAnswer = "To show he is in control of the boys";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion45()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 44;
    var weight = DecodeNumber('vMxQ3vtrbvU=', 482, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vMxQ3vtrbvU=', 482, -1000, 1000),DecodeDecimal('iHAWV19dt6Y=', 482, -1000, 1000),DecodeDecimal('iHAWV19dt6Y=', 482, -1000, 1000));
    question.answers.length = 0;
    question.num = 45;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is the significance of the \"Lord of the Flies\" in the chapter?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('vMxQ3vtrbvU=', 484, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('iHAWV19dt6Y=', 482, -9999, 99999), DecodeNumber('iHAWV19dt6Y=', 482, -9999, 99999), '');
    answer1.shortTextAnswer = "It represents the boys? unity";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('OiOC+1jNqZI=', 486, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('D8pO/TC+OMQ=', 484, -9999, 99999), DecodeNumber('D8pO/TC+OMQ=', 484, -9999, 99999), '');
    answer2.shortTextAnswer = "It symbolizes hope for civilization";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ID8gv68ivJk=', 488, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('3eY54Oyivfw=', 486, -9999, 99999), DecodeNumber('qdewDA5HQFU=', 486, -9999, 99999), '');
    answer3.shortTextAnswer = "It symbolizes the boys? descent into savagery";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ID8gv68ivJk=', 490, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('zw8p0udBLnQ=', 488, -9999, 99999), DecodeNumber('zw8p0udBLnQ=', 488, -9999, 99999), '');
    answer4.shortTextAnswer = "It marks the beginning of their rescue";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion46()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 45;
    var weight = DecodeNumber('fSq54Dbg3SA=', 492, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fSq54Dbg3SA=', 492, -1000, 1000),DecodeDecimal('cWNVMw1vYWA=', 492, -1000, 1000),DecodeDecimal('cWNVMw1vYWA=', 492, -1000, 1000));
    question.answers.length = 0;
    question.num = 46;
    question.isSingleAns = false;
    question.shortTextQuestion = "What does Jack offer to his tribe to gain their loyalty?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('j32o47NImKw=', 494, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('HKGd2UEieMk=', 492, -9999, 99999), DecodeNumber('cWNVMw1vYWA=', 492, -9999, 99999), '');
    answer1.shortTextAnswer = "A feast of meat";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('j32o47NImKw=', 496, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('byOjWAfICxA=', 494, -9999, 99999), DecodeNumber('byOjWAfICxA=', 494, -9999, 99999), '');
    answer2.shortTextAnswer = "A chance to speak freely";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('vEBMc+LK/4k=', 498, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('zwjHvNLBJ2g=', 496, -9999, 99999), DecodeNumber('zwjHvNLBJ2g=', 496, -9999, 99999), '');
    answer3.shortTextAnswer = "A larger shelter";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('9+cxUHXoOVI=', 500, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('9cD/S1Wenvw=', 498, -9999, 99999), DecodeNumber('9cD/S1Wenvw=', 498, -9999, 99999), '');
    answer4.shortTextAnswer = "A new weapon";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion47()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 46;
    var weight = DecodeNumber('xaQXFSdymUY=', 502, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('xaQXFSdymUY=', 502, -1000, 1000),DecodeDecimal('XsJjffobSx0=', 502, -1000, 1000),DecodeDecimal('XsJjffobSx0=', 502, -1000, 1000));
    question.answers.length = 0;
    question.num = 47;
    question.isSingleAns = false;
    question.shortTextQuestion = "How do the boys react when they kill Simon?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('xaQXFSdymUY=', 504, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('XsJjffobSx0=', 502, -9999, 99999), DecodeNumber('XsJjffobSx0=', 502, -9999, 99999), '');
    answer1.shortTextAnswer = "They realize their mistake and feel guilty";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VSo7izqwYTw=', 506, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('+oyb5eYroVw=', 504, -9999, 99999), DecodeNumber('+oyb5eYroVw=', 504, -9999, 99999), '');
    answer2.shortTextAnswer = "They carry his body to the ocean";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('zj+VDQk67lk=', 508, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('I/4NYAzuQ4g=', 506, -9999, 99999), DecodeNumber('zcI6F2MQ8gk=', 506, -9999, 99999), '');
    answer3.shortTextAnswer = "They continue to dance in excitement";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('zj+VDQk67lk=', 510, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('77GclFZ5MNQ=', 508, -9999, 99999), DecodeNumber('77GclFZ5MNQ=', 508, -9999, 99999), '');
    answer4.shortTextAnswer = "They immediately flee in fear";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion48()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 47;
    var weight = DecodeNumber('0xoJyvkd2fM=', 512, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0xoJyvkd2fM=', 512, -1000, 1000),DecodeDecimal('5aVrXKR/WDc=', 512, -1000, 1000),DecodeDecimal('5aVrXKR/WDc=', 512, -1000, 1000));
    question.answers.length = 0;
    question.num = 48;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is the significance of Simon?s death?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('+IXB3BOZNB4=', 514, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('tQEnc8+xrzs=', 512, -9999, 99999), DecodeNumber('5aVrXKR/WDc=', 512, -9999, 99999), '');
    answer1.shortTextAnswer = "It marks the complete collapse of civilization";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+IXB3BOZNB4=', 516, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('5gZgI83Hxbo=', 514, -9999, 99999), DecodeNumber('5gZgI83Hxbo=', 514, -9999, 99999), '');
    answer2.shortTextAnswer = "It symbolizes hope for their rescue";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('5RJT+6jgxhE=', 518, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('4DRtnq/WfOI=', 516, -9999, 99999), DecodeNumber('4DRtnq/WfOI=', 516, -9999, 99999), '');
    answer3.shortTextAnswer = "It shows that the beast is real";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('xiMsY9AuSXk=', 520, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('KomJlPxWXIs=', 518, -9999, 99999), DecodeNumber('KomJlPxWXIs=', 518, -9999, 99999), '');
    answer4.shortTextAnswer = "It is a turning point in the plot";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion49()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 48;
    var weight = DecodeNumber('HFTii88gGiM=', 522, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('HFTii88gGiM=', 522, -1000, 1000),DecodeDecimal('srTZ1Qr3zAw=', 522, -1000, 1000),DecodeDecimal('srTZ1Qr3zAw=', 522, -1000, 1000));
    question.answers.length = 0;
    question.num = 49;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is Simon trying to reveal to the boys before his death?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('9OMahhKJYdM=', 524, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('ZHxauMI40lU=', 522, -9999, 99999), DecodeNumber('srTZ1Qr3zAw=', 522, -9999, 99999), '');
    answer1.shortTextAnswer = "The truth about the beast";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('9OMahhKJYdM=', 526, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('mD1gDXDwowg=', 524, -9999, 99999), DecodeNumber('mD1gDXDwowg=', 524, -9999, 99999), '');
    answer2.shortTextAnswer = "That they are all in danger";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('abWqfn+/pPc=', 528, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('Hl2yULQc5SY=', 526, -9999, 99999), DecodeNumber('Hl2yULQc5SY=', 526, -9999, 99999), '');
    answer3.shortTextAnswer = "That they must escape the island";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('iT2VftVn8l0=', 530, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('LU3PbpOmkg8=', 528, -9999, 99999), DecodeNumber('LU3PbpOmkg8=', 528, -9999, 99999), '');
    answer4.shortTextAnswer = "That Ralph is the true leader";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion50()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 49;
    var weight = DecodeNumber('ak0FCv34d60=', 532, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ak0FCv34d60=', 532, -1000, 1000),DecodeDecimal('wXzT1uNaeog=', 532, -1000, 1000),DecodeDecimal('wXzT1uNaeog=', 532, -1000, 1000));
    question.answers.length = 0;
    question.num = 50;
    question.isSingleAns = false;
    question.shortTextQuestion = "What is the group?s reaction when they realize they have killed Simon?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('ak0FCv34d60=', 534, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('wXzT1uNaeog=', 532, -9999, 99999), DecodeNumber('wXzT1uNaeog=', 532, -9999, 99999), '');
    answer1.shortTextAnswer = "They immediately confess and feel guilty";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wR0X1Im+XRg=', 536, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('3TNS1L8xAQw=', 534, -9999, 99999), DecodeNumber('xfjx6a9dU8E=', 534, -9999, 99999), '');
    answer2.shortTextAnswer = "They return to their normal activities";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wR0X1Im+XRg=', 538, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('oiCz75b96V0=', 536, -9999, 99999), DecodeNumber('oiCz75b96V0=', 536, -9999, 99999), '');
    answer3.shortTextAnswer = "They laugh and brush it off";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Hyi4m9G3bus=', 540, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('zY7JskwsxiQ=', 538, -9999, 99999), DecodeNumber('zY7JskwsxiQ=', 538, -9999, 99999), '');
    answer4.shortTextAnswer = "They are horrified and regret their actions";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion51()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 50;
    var weight = DecodeNumber('wCO5Euntrlo=', 542, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('XSRjOWTww9s=', 542, -1000, 1000),DecodeDecimal('MwiQT0F9Ew8=', 542, -1000, 1000),DecodeDecimal('MwiQT0F9Ew8=', 542, -1000, 1000));
    question.num = 51;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 2 (about 120 words)";
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
    var weight = DecodeNumber('NIOvb8Tu/pg=', 552, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('CZ5rXl06k9U=', 552, -1000, 1000),DecodeDecimal('wCO5Euntrlo=', 552, -1000, 1000),DecodeDecimal('wCO5Euntrlo=', 552, -1000, 1000));
    question.num = 52;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 10 (about 120 words)";
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







*** Settings ***
Documentation     A resource file with reusable keywords and variables.
...
...               The system specific keywords created here form our own
...               domain specific language. They utilize keywords provided
...               by the imported Selenium2Library.
Library           Selenium2Library


*** Variables ***
${SERVER}         https://ripzery.me/todo
${BROWSER}        Chrome
${DELAY}          0.25

*** Keywords ***
Open Website
    Open Browser    ${SERVER}   ${BROWSER}
    Maximize Browser Window
    Set Selenium Speed    ${DELAY}

Typing
    [Arguments]     ${word}
    Input Text      inputTodo    ${word}

Click Add
    Click Button    addTodo

Click Todo By Id
    [Arguments]      ${todoId}
    Click Element    todoItem${todoId}

Click Remove
    Click Button    removeTodo

Get Todo By Id
    [Arguments]     ${todoId}
    [Return]        Element Text Should Be

Get Total Todo
    ${total}=    Get Matching Xpath Count   //div[label]
    [Return]     ${total}

Is Todo Exist
    [Arguments]     ${todoId}
    Element Should Be Visible      todoItem${todoId}

Close Browser
    Close Browser
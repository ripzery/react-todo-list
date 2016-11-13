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
    [Arguments]     ${todo}
    Input Text      inputTodo   ${todo}

Click Add
    Click Button    addTodo

Click Todo By Id
    [Arguments]      ${id}
    Click Element    todoItem${id}

Is Todo Exist
    [Arguments]     ${id}
    Element Should Be Visible      todoItem${id}

Get Total Todo
    ${total}=    Get Matching Xpath Count   //div[label]
    Log     ${total}

Remove Todo
    Click Button    removeTodo

Close Browser Web
    Close Browser
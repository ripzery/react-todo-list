*** Settings ***
Resource  keywords.robot
Test Setup      Open Website
Test Teardown   Close Browser

*** Test Cases ***
[1] Todo List Should Be Empty
    ${total}=     Get Total Todo
    Should Be Equal As Numbers   ${total}   0

[2] Remove Button Should Be Enable
    Typing  Visit blog.ripzery.me
    Click Add
    Click Todo By Id  0
    Element Should Be Enabled  removeTodo

[3] Remove Button Should Be Disable
    Element Should Be Disabled  removeTodo
    Typing  Visit blog.ripzery.me
    Click Add
    Element Should Be Disabled  removeTodo

[4] Add Button Should Be Enable
    Typing  Visit blog.ripzery.me
    Element Should Be Enabled  addTodo

[5] Add Button Should Be Disable
    Element Should Be Disabled  addTodo

[6] Todo Item Should Increment When Added
    ${expected}=   ${1}
    Typing  Visit blog.ripzery.me
    Click Add
    ${total}=     Get Total Todo
    Should Be Equal As Numbers     ${total}    ${expected}

[7] Last Todo Item Should Be Match Added Word
    ${expected}=   Visit blog.ripzery.me
    Typing  Visit blog.ripzery.me
    Click Add
    Element Text Should Be    //label[@id=todoItem0 div]    ${expected}

[8] Todo Item Should Be Remove From List
    Typing  Visit blog.ripzery.me
    Click Add
    Click Todo By Id  0
    Click Remove
    Element Should Not Contain  Visit blog.ripzery.me
*** Settings ***
Resource  keywords.robot

*** Test Cases ***
Test
    Open Website
    Typing   Euro
    Click Add
    Get Total Todo
    [Teardown]    Close Browser Web
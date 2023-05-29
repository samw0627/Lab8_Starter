# Lab 8 - Starter
1. Automated Tests should be within a Github action that runs whenever code is pushed. This is because of the idea of CI/CD, where each code push can be tested to ensure that it is giving the expected output, and thus ensuring a faster deployment process.
2. No
3. No, because it can't test how individual elements in the DOM are changed when the message is sent. For instance, if the messages are displayed correctly, whihc is only possible through E2E testing
4. Yes. We can easily test the function that detects if the password length is longer than 80 characters by writing a unit test, since we only need to take a look at the output of the function and compare it to our expected outputto see if it is working properly. 
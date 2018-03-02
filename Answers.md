<!-- Answers to the Short Answer Essay Questions go here -->
## Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
 - Middleware: As the name implies, middleware is the "middleman" to software connections. It allows components and applications to connect and work together that would otherwise not be able to do so.

 - Sessions: A session is essentially a way to store data that you want access to across requests. They allow the application to store state and create persistance, i.e. preventing users from having to log in every time they reload a page or try to load a different page.

 - Bcrypt: Bcrypt is a password hashing function used to encrypt passwords.

 - JWT: A Json Web Token is used for securely transmitting data between parties as a JSON object. It is signed digitally using either a secret or a public/private key pair with RSA. They are typically used for Authentication or Information Exchange.

## What does bcrypt do in order to prevent attacks?
- Brcypt incorporates a salt to protect against rainbow table attacks, and also is an adaptive function, allowing iteration counts to be increased to make it slower, helping it remain resistant to brute-force attacks.

## What are the three parts of the JSON Web Token?
1. Header - consists of two parts, the type of token(JWT) and the hashing algorithm being used.

2. Payload - contains the claims. Claims can be registered, public or private. These are statements about a user and additional metadata.

3. Signature - the signature is created by taking the encoded header, encoded payload, a secret, the algorithm specified in the header, and sign it. It is used to verify that the sender is who they say they are and the message hasn't been tampered with in anyway.

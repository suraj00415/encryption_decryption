
# 🔐 Cyber Security Ciphers in React

Welcome to the **Cyber Security Ciphers** project! This React and TypeScript-based project showcases implementations of various classical ciphers, bringing the fascinating world of cryptography to life. Whether you're a student, a professional, or just a curious mind, these components will help you understand and visualize how different encryption techniques work, right in your browser.

## 🚀 Getting Started

Follow these steps to set up the project on your local machine:

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version 14 or later)
- **npm** or **yarn**

### Installation Steps

1. **Clone the Repository:**

    Begin by cloning the repository to your local machine:

    ```sh
    git clone https://github.com/suraj00415/encryption_decryption.git
    cd encryption_decryption
    ```

2. **Install Dependencies:**

    Next, install all the necessary dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```


3. **Start the Development Server:**

    Now, you're ready to start the development server:

    ```sh
    npm run dev
    # or
    yarn dev
    ```

    Your application will be up and running at [http://localhost:3000](http://localhost:3000). Open this URL in your browser to start exploring the ciphers!


## 🔑 Cipher Implementations

Explore a variety of classical ciphers, each implemented as a React component in the \`pages\` directory. Here's a quick overview:

- **Affine Cipher (\`affine.tsx\`)**:  
   Experience the magic of the Affine cipher, a type of monoalphabetic substitution cipher where each letter in an alphabet is mapped to its numeric equivalent, encrypted using a mathematical function, and then converted back to a letter.

- **Columnar Transposition Cipher (\`columnar.tsx\`)**:  
   Discover how rearranging the plaintext into a grid and reading it off in columns can secure your messages.

- **Feistel Cipher (\`feistel.tsx\`)**:  
   Dive into the workings of a basic Feistel structure, a building block for many modern encryption algorithms.

- **Monoalphabetic Substitution Cipher (\`mono.tsx\`, \`monoalphabetic.tsx\`)**:  
   Uncover the simplicity and vulnerabilities of replacing each letter of the plaintext with a fixed letter of the alphabet.

- **Playfair Cipher (\`playfair.tsx\`)**:  
   Decode messages using the Playfair cipher, a digraph substitution cipher that encrypts pairs of letters.

- **Rail Fence Cipher (\`railfence.tsx\`)**:  
   Explore this simple transposition cipher that jumbles the order of letters by writing them in a zigzag pattern.

- **Shift Cipher (\`shift.tsx\`)**:  
   Understand the classic Caesar cipher, which shifts the letters of the alphabet by a fixed number.

- **Vigenère Cipher (\`vigener.tsx\`)**:  
   Learn how the Vigenère cipher uses a keyword to create a polyalphabetic substitution, making it harder to crack than simple substitution ciphers.

## 🎨 Visualization & Interaction

Each cipher comes with interactive components that allow you to:

- **Encrypt and Decrypt**: See the process in action by entering your text and key.
- **Visualize the Process**: Understand how each step transforms the plaintext into ciphertext and vice versa.
- **Experiment with Variations**: Modify keys and inputs to see how changes affect the output.

## Contributing

If you would like to contribute to this project, feel free to fork the repository, make changes, and submit a pull request. Contributions are welcome!

## Contact

For any questions or issues, please contact [suraj00415@gmail.com](mailto:suraj00415@gmail.com).

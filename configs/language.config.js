const { CPP, C, PYTHON, JAVA, NODEJS, RUBY, PROMPTV1, PROMPTV2, DART, REACT_NATIVE, CSHARP } = require('../enums/supportedLanguages');
const ONE_MB = 1024; // ulimit uses Kilobyte as base unit
const ALLOWED_RAM = process.env.ALLOWED_RAM || 512;

const LANGUAGES_CONFIG = {
    // [C]: {
    //     compile: 'gcc -o a.out solution.c',
    //     run: './a.out',
    //     timeout: 2,
    //     filename: 'solution.c',
    //     memory: ALLOWED_RAM * ONE_MB,
    // },
   [C]: {
        compile: 'gcc /tmp/main.c -o /tmp/main',
        run: '/tmp/main',
        filename: 'main.c',
        memory: 256,
        timeout: 5
    },
    // [CPP]: {
    //     compile: 'g++ -o a.out -pthread -O0 solution.cpp',
    //     run: './a.out',
    //     timeout: 2,
    //     filename: 'solution.cpp',
    //     memory: ALLOWED_RAM * ONE_MB,
    // },
    [CPP]: {
        compile: 'g++ /tmp/main.cpp -o /tmp/main',
        run: '/tmp/main',
        filename: 'main.cpp',
        memory: 256,
        timeout: 5
    },
    // [PYTHON]: {
    //     compile: 'python -m compileall -q solution.py',
    //     run: 'python solution.py',
    //     timeout: 10,
    //     filename: 'solution.py',
    //     memory: ALLOWED_RAM * ONE_MB,
    // },
    [PYTHON]: {
        compile: '',  // No compile step needed
        run: 'python3 /tmp/main.py',
        filename: 'main.py',
        memory: 256,
        timeout: 5
    },
    [JAVA]: {
        compile: 'javac Solution.java',
        run: 'java Solution',
        timeout: 4,
        filename: 'Solution.java',
        memory: ALLOWED_RAM * ONE_MB,
    },
    [NODEJS]: {
        compile: 'node --check solution.js',
        run: 'node solution.js',
        timeout: 10,
        filename: 'solution.js',
        memory: 786432, // Node.js v20 requires more initial memory, so initialize it to around 780MB (1.5 * 512MB). This value is higher than the previous 512MB but below 1GB to ensure ulimit catches excessive memory use without the GCR container being killed.
    },
    // [RUBY]: {
    //     compile: 'ruby -c solution.rb',
    //     run: 'ruby solution.rb',
    //     timeout: 10,
    //     filename: 'solution.rb',
    //     memory: ALLOWED_RAM * ONE_MB,
    // },
    [RUBY]: {
        compile: '',  // No compile step needed
        run: 'ruby /tmp/main.rb',
        filename: 'main.rb',
        memory: 256,
        timeout: 5
    },
    [PROMPTV1]: {
        model: 'gpt-4-1106-preview',
    },
    [PROMPTV2]: {
        model: 'gpt-3.5-turbo-1106',
    },
    // [DART]: {
    //     compile: 'dart compile exe solution.dart -o solution',
    //     run: './solution',
    //     timeout: 10,
    //     filename: 'solution.dart',
    //     memory: ALLOWED_RAM * ONE_MB,
    // },
    [DART]: {
        compile: 'dart compile exe /tmp/main.dart -o /tmp/main',
        run: '/tmp/main',
        filename: 'main.dart',
        memory: 256,
        timeout: 5
    },
    // [REACT_NATIVE]: {
    //     compile: '',
    //     run: 'npx react-native run-android', // Simplified run command
    //     timeout: 30,
    //     filename: 'App.js',
    //     memory: ALLOWED_RAM * ONE_MB,
    // },
    [REACT_NATIVE]: {
        compile: '',  // React Native is not typically compiled in this manner
        run: '',      // It requires a different setup
        filename: 'App.js',
        memory: 256,
        timeout: 5
    },
    // [CSHARP]: {
    //     compile: 'csc -out:solution.exe solution.cs',
    //     run: 'mono solution.exe',
    //     timeout: 10,
    //     filename: 'solution.cs',
    //     memory: ALLOWED_RAM * ONE_MB,
    // },
    [CSHARP]: {
        compile: 'mcs -out:/tmp/main.exe /tmp/main.cs',
        run: 'mono /tmp/main.exe',
        filename: 'main.cs',
        memory: 256,
        timeout: 5
    },
};

module.exports = { LANGUAGES_CONFIG };

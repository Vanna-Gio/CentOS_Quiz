
    // Game Data - Moved to separate object for better organization
    const gameData = {
        listenAndType: {
            "word": [
                {
                    khmer: ` 🔐 Privilege
                           <br> 🟢 English meaning:
                             <br>   Something you are allowed to do that others might not be.

                              <br>  🛠️ In Linux:
                              <br>  A “privilege” is a special permission.
                               <br> For example:

                               <br> Turning off the computer

                              <br>  Installing software

                               <br> Reading or changing system files
                               <br> These are all privileges only allowed to special users like root or admins.

                               <br> 🧠 Khmer meaning: អំណាច / សិទ្ធិពិសេស
                               <br> ➡️ Example:
                                <br>Only root has the privilege to shut down the system.
                            `,
                    answer: "Something you are allowed to do that others might not be. A “privilege” is a special permission."
                },
                {
                    khmer: `2. ✅ Permitted
                            <br>🟢 English meaning:
                            <br>Allowed to do something.

                            <br>🛠️ In Linux:
                           <br>A user is “permitted” to run a command if they are allowed to do it.
                            <br>Example:

                            <br>If you are permitted to use sudo, you can run admin commands.

                            <br>🧠 Khmer meaning: បានអនុញ្ញាត / ត្រូវបានអនុញ្ញាត
                            <br>➡️ Example:
                            <br>This user is not permitted to change that file.`,
                    answer: "Allowed to do something. A user is “permitted” to run a command if they are allowed to do it."
                },
                {
                    khmer: `3. 🚀 Elevated
                            <br>🟢 English meaning:
                            <br>Higher or more powerful than normal.

                            <br>🛠️ In Linux:
                            <br>“Elevated privileges” means running a command with higher power (like root).

                            <br>➡️ Example:
                            <br>If you use sudo, the command runs with elevated privileges — like you are temporarily root.

                            <br>🧠 Khmer meaning: កម្រិតខ្ពស់ / ធ្វើឲ្យខ្ពស់ឡើង (ប្រើក្នុងការដំណើរការដូចជា root)

                            <br>➡️ Sentence:
                            <br>The command must be run with elevated privileges.`
                },
                {
                    khmer: "CLI (A command line Interface) <br> uses text-based commands.<br> ctrl + Alt + F3 to F6 or command line sudo init 3 <br>Then press Ctrl + Alt + F1 (F2 or F7) to go back to the GUI.",
                    answer: "CLI (A command line Interface) uses text-based commands."
                },
                {
                    khmer: "GUI (A Graphical User Interface)<br>relies on visual elements like icon and menus for user interaction.<br> <b>sudo init 5<b> Then press Ctrl + Alt + F2 to go back to the GUI.",
                    answer: "GUI (A Graphical User Interface) relies on visual elements like icon and menus for user interaction."
                },
                {
                    khmer: "grep (Global Regular Expression Print) "
                }

            ],
            "✅symbols command line": [
                {
                    khmer: "double greater than <br>Name: append operator<br>Meaning: Add this line to the end of the file.",
                    answer: ">> Add this line to the end of the file."
                },
                {
                    khmer: "greater than<br>Name: overwrite or redirect operator<br>Meaning: Replace the content of the file with this line.",
                    answer: "> Replace the content of the file with this line."
                },
                {
                    khmer: "tilde <br> name: tilde or  home shortcut<br>Meaning: Go to your home directory.",
                    answer: "~ Go to your home directory."
                },
                {
                    khmer: "tilde slash<br>Name: home directory path.<br>cat ~/log.txt<br>say: cd tilde or cat tilde slash log dot txt<br>Meaning: Read the file called log.txt in your home folder.",
                    answer: "~/ Read the file called log.txt in your home folder."
                }
            ],
            //Chapter 2 – CentOS Basic
            "🔌 Shutdown and Restart": [
                {
                    sentence: "reboot",
                    khmer: "reboot<br>Purpose: Restarts the system .....<br>Use case: Useful when updates ... a reboot or after changing ... settings.",
                    answer: "reboot Purpose: Restarts the system immediately.Use case: Useful when updates require a reboot or after changing kernel settings."
                },
                {
                    sentence: "shutdown -h now",
                    khmer: "shutdown -h now<br>Purpose: Shuts down the system ....<br>Use case: Used for ... shutdowns or when the system needs to be ... off quickly.",
                    answer: "shutdown -h now Purpose: Shuts down the system immediately.Use case: Used for emergency shutdowns or when the system needs to be powered off quickly."
                },
                {
                    sentence: "poweroff",
                    khmer: "poweroff<br>Purpose: Powers off the system directly. Often equivalent to shutdown -h now.",
                    answer: "poweroff Purpose: Powers off the system directly. Often equivalent to shutdown -h now."
                },
                {
                    sentence: "shutdown -r now",
                    khmer: "shutdown -r now<br>Purpose: Reboots the system immediately. Use case: Useful for applying ... that require a reboot without ...",
                    answer: "shutdown -r Purpose: Reboots the system immediately. Use case: Useful for applying updates that require a reboot without delay."
                },
                {
                    sentence: "shutdown -h +10",
                    khmer: "shutdown -h +10<br>Purpose: Schedules a shutdown in 10 minutes.<br>Use case: Allows users to save work before the system powers off.",
                    answer: "shutdown -h +10 Purpose: Schedules a shutdown in 10 minutes.Use case: Allows users to save work before the system powers off."
                },
                {
                    sentence: "shutdown -h 22:54",
                    khmer: "shutdown -h 22:54 <br>Purpose: Schedule shutdown at 10:54 PM.",
                    answer: "shutdown -h 22:54 Purpose: Schedule shutdown at 10:54 PM."
                },
                {
                    sentence: "shutdown -c",
                    khmer: "shutdown -c <br> Purpose: Cancels any scheduled shutdown.",
                    answer: "shutdown -c Purpose: Cancels any scheduled shutdown."
                },
                {
                    sentence: "shutdown -r +5",
                    khmer: "Pshutdown -r +5<br>urpose: Schedules a reboot in 5 minutes.<br>Use case: Gives users time to prepare for a reboot, such as saving files.",
                    answer: "shutdown -r +5 Purpose: Schedules a reboot in 5 minutes.Use case: Gives users time to prepare for a reboot, such as saving files."
                },
                {
                    sentence: "reboot -f",
                    khmer: "reboot -f<br>Purpose: Forces an immediate reboot without shutting down services gracefully.<br>Use case: Used when the system is unresponsive and needs to be restarted urgently.",
                    answer: "reboot -f Purpose: Forces an immediate reboot without shutting down services gracefully.Use case: Used when the system is unresponsive and needs to be restarted urgently."
                },
                {
                    sentence: "halt",
                    khmer: "halt<br>Purpose: Stops all processes and powers off the machine.<br>Use case: Used when you want to stop all operations and turn off the computer.",
                    answer: "halt Purpose: Stops all processes and powers off the machine.Use case: Used when you want to stop all operations and turn off the computer."
                },
                {
                    sentence: "poweroff",
                    khmer: "poweroff<br>Purpose: Powers off the machine immediately.<br>Use case: Similar to halt, but specifically used to turn off power.",
                    answer: "poweroff Purpose: Powers off the machine immediately.Use case: Similar to halt,but specifically used to turn off power."
                },

            ],
            "🌙 Sleep & Hibernate": [
                {
                    sentence: "pm-suspend-hybrid",
                    khmer: "pm-suspend-hybrid<br>Purpose: Puts the system to sleep (suspend to RAM + disk).<br>Saves power but resumes quickly.",
                    answer: "pm-suspend-hybrid Purpose: Puts the system to sleep (suspend to RAM + disk). Saves power but resumes quickly."
                },
                {
                    sentence: "pm-hibernate",
                    khmer: "pm-hibernate<br>Purpose: Puts system into hibernate (suspend to disk).<br>Safer during long inactivity but slower to resume.",
                    answer: "pm-hibernate Purpose: Puts system into hibernate (suspend to disk). Safer during long inactivity but slower to resume."
                },


            ],
            "🔀 Switch Between Modes": [
                {
                    sentence: "Ctrl + Alt + F1 or F7",
                    khmer: "Ctrl + Alt + F1 or F7<br> Purpose: Switches between different TTYs (text terminals) in Linux.<br>Use case: Useful for accessing a command line interface when the graphical interface is unresponsive.",
                    answer: "Ctrl + Alt + F1 or F7 Purpose: Switches between different TTYs (text terminals) in Linux. Use case: Useful for accessing a command line interface when the graphical interface is unresponsive."
                },
                {
                    sentence: "Ctrl + Alt + F2 to F6",
                    khmer: "Ctrl + Alt + F2 to F6<br>Purpose: Switches to other TTYs (text terminals) in Linux.<br>Use case: Allows access to multiple command line interfaces for different tasks.",
                    answer: "Ctrl + Alt + F2 to F6 Purpose: Switches to other TTYs (text terminals) in Linux. Use case: Allows access to multiple command line interfaces for different tasks."

                }
            ],
            "🔐 User Switching": [
                {
                    sentence: "su username",
                    khmer: "su username<br>Purpose: Switches to another user account in the terminal.<br>Use case: Allows you to perform tasks as a different user without logging out.",
                    answer: "su username Purpose: Switches to another user account in the terminal. Use case: Allows you to perform tasks as a different user without logging out."
                },
                {
                    sentence: "su root",
                    khmer: "su root<br>Purpose: Switches to the root user account in the terminal.<br>Use case: Grants administrative privileges for system-level tasks.",
                    answer: "su root Purpose: Switches to the root user account in the terminal. Use case: Grants administrative privileges for system-level tasks."
                },


            ],
            "📘 Help System": [
                {
                    sentence: "command --help",
                    khmer: "command --help<br>Purpose: Displays help information for a specific command.<br>Use case: Provides usage details and options for the command.<br>Purpose: Displays a quick summary of how to use the command.<br>Example: ls --help",
                    answer: "command --help Purpose: Displays help information for a specific command. Use case: Provides usage details and options for the command."
                },
                {
                    sentence: "man command",
                    khmer: "man command<br>Purpose: Opens the manual page (detailed help).<br>Example: man ls",
                    answer: "man command Purpose: Opens the manual page (detailed help). Example: man ls"
                },
                {
                    sentence: "info command",
                    khmer: "info command<br>Purpose: Displays detailed information about a command.<br>Use case: Provides comprehensive documentation and examples for the command.<br>Purpose: Shows structured help information with navigation (like a mini-book).<br>Example: info grep",
                    answer: "info command Purpose: Displays detailed information about a command. Use case: Provides comprehensive documentation and examples for the command."
                }


            ],
            "📂 File System Navigation": [
                {
                    sentence: "pwd",
                    khmer: "pwd<br>Purpose: Displays the current working directory.<br>Use case: Helps you know where you are in the file system.",
                    answer: "pwd Purpose: Displays the current working directory. Use case: Helps you know where you are in the file system."
                },
                {
                    sentence: "ls",
                    khmer: "ls<br>Purpose: Lists files and directories in the current directory.<br>Use case: Useful for viewing the contents of a directory.",
                    answer: "ls Purpose: Lists files and directories in the current directory. Use case: Useful for viewing the contents of a directory."
                },
                {
                    sentence: "cd directory",
                    khmer: "cd directory<br>Purpose: Changes the current directory to the specified one.<br>Use case: Allows you to navigate to different directories.",
                    answer: "cd directory Purpose: Changes the current directory to the specified one. Use case: Allows you to navigate to different directories."
                },
                {
                    sentence: "cd ..",
                    khmer: "cd ..<br>Purpose: Moves up one level in the directory hierarchy.<br>Use case: Useful for navigating back to the parent directory.",
                    answer: "cd .. Purpose: Moves up one level in the directory hierarchy. Use case: Useful for navigating back to the parent directory."
                },
                {
                    sentence: "cd ~", answer: "Purpose: Go to the current user's home directory.",
                    khmer: "cd ~<br>Purpose: Go to the current user's home directory.<br>Purpose: Changes the current directory to the user's home directory.<br>Use case: Quickly navigates to your home directory from anywhere in the file system.",
                    answer: "cd ~ Purpose: Changes the current directory to the user's home directory. Use case: Quickly navigates to your home directory from anywhere in the file system."
                },
                {
                    sentence: "cd /", answer: "Purpose: Go to the root directory.",
                    khmer: "cd /<br>Purpose: Go to the root directory.<br>Purpose: Changes the current directory to the root directory.<br>Use case: Useful for navigating to the top level of the file system hierarchy.",
                    answer: "cd / Purpose: Changes the current directory to the root directory. Use case: Useful for navigating to the top level of the file system hierarchy."
                },
                {
                    sentence: "cd -", answer: "Purpose: Go back to the previous directory.",
                    khmer: "cd -<br>Purpose: Go back to the previous directory.<br>Purpose: Switches back to the previous directory.<br>Use case: Handy for toggling between two directories quickly.",
                    answer: "cd - Purpose: Switches back to the previous directory. Use case: Handy for toggling between two directories quickly."
                },
                {
                    sentence: "ls -l",
                    khmer: "ls -l<br>Purpose: Lists files and directories with detailed information (permissions, owner, size, etc.).<br>Use case: Provides a more comprehensive view of file attributes.",
                    answer: "ls -l Purpose: Lists files and directories with detailed information (permissions, owner, size, etc.). Use case: Provides a more comprehensive view of file attributes."
                },
                {
                    sentence: "ls -a",
                    khmer: "ls -a<br>Purpose: Lists all files, including hidden ones (those starting with a dot).<br>Use case: Useful for viewing all files in a directory.",
                    answer: "ls -a Purpose: Lists all files, including hidden ones (those starting with a dot). Use case: Useful for viewing all files in a directory."
                },
                {
                    sentence: "ls -lh",
                    khmer: "ls -lh<br>Purpose: Lists files with human-readable sizes (e.g., KB, MB).<br>Use case: Makes it easier to understand file sizes at a glance.",
                    answer: "ls -lh Purpose: Lists files with human-readable sizes (e.g., KB, MB). Use case: Makes it easier to understand file sizes at a glance."
                },
                {
                    sentence: "tree",
                    khmer: "tree<br>Purpose: Displays the directory structure in a tree-like format.<br>Use case: Provides a visual representation of the file system hierarchy.",
                    answer: "tree Purpose: Displays the directory structure in a tree-like format. Use case: Provides a visual representation of the file system hierarchy."
                }

            ],
            "📝 Text Editor (vi)": [
                {
                    sentence: "vi filename",
                    khmer: "vi filename<br>Purpose: Opens the specified file in the vi text editor.<br>Use case: Allows you to edit text files directly from the terminal.",
                    answer: "vi filename Purpose: Opens the specified file in the vi text editor. Use case: Allows you to edit text files directly from the terminal."
                },
                {
                    sentence: "Press i to insert (start typing).",
                    khmer: "Press i to insert (start typing).<br>Purpose: Enters insert mode in vi, allowing you to type and edit text.<br>Use case: Essential for adding or modifying content in the file.",
                    answer: "Press i to insert (start typing). Purpose: Enters insert mode in vi, allowing you to type and edit text. Use case: Essential for adding or modifying content in the file."
                },
                {
                    sentence: "Press Esc, then :wq to write and quit.",
                    khmer: "Press Esc, then :wq to write and quit.<br>Purpose: Saves changes and exits the vi editor.<br>Use case: Necessary to save your edits before closing the file.",
                    answer: "Press Esc, then :wq to write and quit. Purpose: Saves changes and exits the vi editor. Use case: Necessary to save your edits before closing the file."
                },
                {
                    sentence: "Press Esc, then :q! to quit without saving.",
                    khmer: "Press Esc, then :q! to quit without saving.<br>Purpose: Exits vi without saving any changes made.<br>Use case: Useful if you want to discard changes and exit the editor.",
                    answer: "Press Esc, then :q! to quit without saving. Purpose: Exits vi without saving any changes made. Use case: Useful if you want to discard changes and exit the editor."
                },


            ],
            "🖱️ Touch Command": [
                {
                    sentence: "touch file1.txt",
                    khmer: "touch file1.txt<br>Purpose: Creates a new empty file.",
                    answer: "touch file1.txt Purpose: Creates a new empty file."

                },
                {
                    sentence: "touch file1 file2 file3",
                    khmer: 'touch file1 file2 file3<br>Purpose: Creates multiple files at once.',
                    answer: "touch file1 file2 file3 Purpose: Creates multiple files at once."

                },
                {
                    sentence: "touch .hiddenfile",
                    khmer: "touch .hiddenfile<br>Purpose: Creates a hidden file (starts with a dot).",
                    answer: "touch .hiddenfile Purpose: Creates a hidden file (starts with a dot)."
                }

            ],
            "📄 Text Utilities": [
                {
                    khmer: "head -5 file.txt<br>Purpose: Shows the first 5 lines of the file.",
                    answer: "head -5 file.txt Purpose: Shows the first 5 lines of the file."
                },
                {
                    khmer: "tail -5 file.txt<br>Purpose: Shows the last 5 lines of the file.",
                    answer: "tail -5 file.txt Purpose: Shows the last 5 lines of the file."
                },
                {
                    khmer: "grep word file.txt<br>Purpose: Searches for 'word' inside the file and shows matching lines.",
                    answer: "grep word file.txt Purpose: Searches for word inside the file and shows matching lines. "
                }

            ],
            "📢 Echo Variables and Output": [
                {
                    khmer: "echo Hello<br>Purpose: Prints the text Hello to the terminal.",
                    answer: "echo Hello Purpose: Prints the text Hello to the terminal."
                },
                {
                    khmer: "echo $USER<br>Purpose: Prints the currently logged-in user.",
                    answer: "echo $USER Purpose: Prints the currently logged-in user."
                },
                {
                    khmer: "echo $HOME<br>Purpose: Prints the path to your home directory.",
                    answer: "echo $HOME Purpose: Prints the path to your home directory."
                },
                {
                    khmer: `echo "Test" > file.txt<br> Purpose: Writes "Test" to the file (overwrite existing content).`,
                    answer: `echo "Test" > file.txt Purpose: Writes "Test" to the file (overwrite existing content).`
                },
                {
                    khmer: `echo "More" >> file.txt<br>Purpose: Appends "More" to the end of the file.`,
                    answer: `echo "More" >> file.txt Purpose: Appends "More" to the end of the file.`
                }

            ],
            "🐚 Shell Info and Prompts": [
                {
                    khmer: "echo $SHELL<br>Purpose: Displays the default shell in use (e.g., /bin/bash).",
                    answer: "echo $SHELL Purpose: Displays the default shell in use (e.g., /bin/bash). "
                },
                {
                    khmer: "echo $HOSTNAME<br>Purpose: Shows the system's hostname.",
                    answer: "echo $HOSTNAME Purpose: Shows the system's hostname."
                },
                {
                    khmer: "echo $USER<br>Purpose: Shows your current username.",
                    answer: "echo $USER Purpose: Shows your current username."
                },

            ],
            "📶 Runlevels and Modes": [
                {
                    khmer: "init 3<br>Purpose: Switch to text mode (multi-user without GUI).",
                    answer: "init 3 Purpose: Switch to text mode (multi-user without GUI)."
                },
                {
                    khmer: "init 5<br>Purpose: Switch to graphical mode.",
                    answer: "init 5 Purpose: Switch to graphical mode."
                },
                {
                    khmer: "init 6<br>Purpose: Reboot the system.",
                    answer: "init 6 Purpose: Reboot the system."
                },
                {
                    sentence: "systemctl get-default",
                    khmer: "systemctl get-default<br>Purpose: Shows the current default target (runlevel).",
                    answer: "systemctl get-default Purpose: Shows the current default target (runlevel)."
                }
            ],

            "su, sudo, and sudo su": [
                {
                    khmer: " <b>su<b> (Switch User)<br>Stands for: “Substitute User” or “Switch User”<br>Used to switch from your current user to another user (often root).",
                    answer: "Used to switch from your current user to another user (often root)."
                },
                {
                    khmer: "su<br>Prompts for the root password.<br>After entering it, you get a root shell. <br>You're now operating as root user.",
                    answer: "Prompts for the root password. After entering it, you get a root shell. You're now operating as root user."
                }, {
                    khmer: "🔹 To switch to another user:<br>su username<br>",
                    answer: "To switch to another user."
                },
                {
                    khmer: "<b>sudo (Superuser Do)<b><br>Allows a permitted user to run a command as another user (by default, root) without switching accounts.<br>You stay as your normal user but run a single command with elevated privileges.",
                    answer: "Allows a permitted user to run a command as another user (by default, root) without switching accounts. You stay as your normal user but run a single command with elevated privileges."
                },
                {
                    khmer: " sudo su <br> "
                }
            ],
        },
        // NEW TOP-LEVEL KEY FOR COMBINED SETS
        combinedListenAndTypeSets: {
            "Chapter 2 – CentOS Basic": []
        }
    };

    // Populate combinedListenAndTypeSets dynamically after gameData definition
    gameData.combinedListenAndTypeSets["Chapter 2 – CentOS Basic"] = [
        ...gameData.listenAndType["🔌 Shutdown and Restart"],
        ...gameData.listenAndType["🌙 Sleep & Hibernate"],
        ...gameData.listenAndType["🔀 Switch Between Modes"],
        ...gameData.listenAndType["🔐 User Switching"],
        ...gameData.listenAndType["📘 Help System"],
        ...gameData.listenAndType["📂 File System Navigation"],
        ...gameData.listenAndType["📝 Text Editor (vi)"],
        ...gameData.listenAndType["🖱️ Touch Command"],
        ...gameData.listenAndType["📄 Text Utilities"],
        ...gameData.listenAndType["📢 Echo Variables and Output"],
        ...gameData.listenAndType["🐚 Shell Info and Prompts"],
    ];

    // Game State Management
    const gameState = {
        mode: null,
        currentIndex: 0,
        score: 0,
        currentPool: [],
        currentListenAndTypeCategory: null, // For Listen & Type sub-categories
        synth: window.speechSynthesis, // SpeechSynthesisUtterance for text-to-speech
        voices: [],
        timerInterval: null, // To hold the timer interval
        timeLeft: 30, // Initial time for vocabulary questions (increased for more comfort)
    };

    // DOM Elements
    const elements = {
        modeSelection: document.getElementById("modeSelection"),
        gameArea: document.getElementById("gameArea"),
        homeLink: document.getElementById("homeLink"),
        aboutLink: document.getElementById("aboutLink"),
        contactLink: document.getElementById("contactLink"),
        resourcesLink: document.getElementById("resourcesLink"),
        navContainer: document.querySelector(".nav-container"), // Added for profile image insertion
        mainHeading: document.querySelector('h1') // Direct reference to the main heading
    };

    // Initialize SpeechSynthesis voices
    window.speechSynthesis.onvoiceschanged = () => {
        gameState.voices = gameState.synth.getVoices();
    };

    // Event Listeners (using delegated events for mode selection for efficiency)
    elements.homeLink.addEventListener("click", goHome);
    elements.aboutLink.addEventListener("click", () => showInfoModal("About Us", "This is an interactive English learning game designed to help you improve your language skills through various challenges: Vocabulary, Grammar, Shadowing, and Q&A."));

    // Add profile image dynamically
    const profileImage = document.createElement("img");
    profileImage.src = "image/AnnaRa.png"; // Replace with the actual path to your image
    profileImage.alt = "Profile Image";
    profileImage.className = "profile-image"; // Apply defined styles
    profileImage.addEventListener("click", () => {
        showInfoModal("Profile", "Sovanna!, Are you ready to improve yourself step by step! Let's start now! <br> Tomorrow you will see progress!");
    });
    elements.navContainer.prepend(profileImage); // Use prepend to place it before other nav items

    elements.contactLink.addEventListener("click", () => showInfoModal("Contact", "For support or feedback, please email us at: <a href='mailto:rasovanna785@gmail.com'>rasovanna785@gmail.com</a>"));
    elements.resourcesLink.addEventListener("click", () => showInfoModal("Resources", "Check out these helpful resources:<br><ul><li><a href='https://dictionary.cambridge.org/' target='_blank'>Cambridge Dictionary</a></li><li><a href='https://www.bbc.co.uk/learningenglish/' target='_blank'>BBC Learning English</a></li><li><a href='https://www.duolingo.com/' target='_blank'>Duolingo</a></li></ul>"));

    // Use event delegation for mode selection buttons
    elements.modeSelection.addEventListener('click', (event) => {
        // Ensure the clicked element or its parent has the 'sub-menu-btn' class
        const targetButton = event.target.closest('.sub-menu-btn');
        if (targetButton) {
            const mode = targetButton.dataset.mode;
            if (mode) {
                selectMode(mode);
            }
        }
    });

    // Utility Functions
    function showInfoModal(title, content) {
        clearInterval(gameState.timerInterval); // Stop any active timer
        elements.gameArea.innerHTML = `
            <div class="container">
                <h2>${title}</h2>
                <div class="question-box" style="text-align: left;">
                    <p>${content}</p>
                </div>
                <button class="btn btn-primary" onclick="goHome()">Back to Home</button>
            </div>
        `;
        elements.modeSelection.classList.add('hidden'); // Use Tailwind hidden class
        elements.gameArea.classList.remove('hidden'); // Ensure gameArea is visible
    }

    function shuffleArray(array) {
        return [...array].sort(() => 0.5 - Math.random());
    }

    function speakText(text, lang = 'en-US') {
        if (!gameState.synth) {
            console.warn("SpeechSynthesis not supported or not ready.");
            return;
        }
        // Cancel any ongoing speech
        gameState.synth.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;

        const englishVoices = gameState.voices.filter(voice => voice.lang.startsWith('en')); // Filter for English voices
        if (englishVoices.length > 0) {
            utterance.voice = englishVoices[0]; // Pick the first English voice
        }

        gameState.synth.speak(utterance);
    }

    function startTimer(duration, onTick, onComplete) {
        clearInterval(gameState.timerInterval); // Clear any existing timer
        gameState.timeLeft = duration;
        onTick(gameState.timeLeft); // Initial call

        gameState.timerInterval = setInterval(() => {
            gameState.timeLeft--;
            onTick(gameState.timeLeft);
            if (gameState.timeLeft <= 0) {
                clearInterval(gameState.timerInterval);
                onComplete();
            }
        }, 1000);
    }

    function stopTimer() {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
    }

    // Core Game Functions
    function goHome() {
        resetGameState();
        elements.modeSelection.classList.remove('hidden'); // Show mode selection
        elements.gameArea.classList.add('hidden'); // Hide game area
        elements.gameArea.innerHTML = "";
        elements.mainHeading.textContent = "Master English: Your Interactive Learning Journey";
    }

    function resetGameState() {
        stopTimer(); // Ensure timer is stopped
        gameState.mode = null;
        gameState.currentIndex = 0;
        gameState.score = 0;
        gameState.currentPool = [];
        gameState.currentListenAndTypeCategory = null; // Reset new state variable
        gameState.synth.cancel(); // Stop any ongoing speech
    }

    function selectMode(mode) {
        resetGameState(); // Reset state when a new mode is selected
        gameState.mode = mode;
        elements.modeSelection.classList.add('hidden'); // Hide mode selection
        elements.gameArea.classList.remove('hidden'); // Show game area

        let headingText = '';
        switch (mode) {
            case 'listen-type':
                headingText = '👂 Listen & Type Challenge';
                // Instead of starting directly, show category selection
                displayListenAndTypeCategories();
                return; // Exit here as displayListenAndTypeCategories handles the rendering
            case 'allListenAndType':
                headingText = '🔗 All Listen And Type Sets';
                initAllListenAndTypeSetsSelection(); // Call new function for sub-selection
                return; // Exit here as initAllListenAndTypeSetsSelection handles the rendering
            default:
                headingText = 'Interactive Learning Journey';
        }
        elements.mainHeading.textContent = `Master English: ${headingText}`; // Update H1

        elements.gameArea.innerHTML = `
            <div class="container">
                <h2 class="text-center">Loading ${headingText.replace('❓ ', '')}...</h2>
                <p class="info-text">Prepare for your challenge!</p>
            </div>
        `;
    }

    function displayGameEndScreen() {
        stopTimer(); // Ensure the timer is stopped
        let message = '';
        let finalScore = gameState.score;
        const totalItems = gameState.currentPool.length;

        message = `You completed the ${gameState.mode === 'listen-type' ? 'Listen & Type' : 'All Listen & Type'} Challenge!`;
        message += `<p>Your final score is: <span class="score-display">${finalScore} / ${totalItems}</span></p>`;
        if (totalItems > 0) {
            const percentage = (finalScore / totalItems) * 100;
            if (percentage === 100) {
                message += '<p class="success-message">Excellent! Perfect score!</p>';
            } else if (percentage >= 75) {
                message += '<p class="info-message">Great job! Keep practicing!</p>';
            } else if (percentage >= 50) {
                message += '<p class="warning-message">Good effort! You\'re getting there.</p>';
            } else {
                message += '<p class="error-message">Keep trying! Practice makes perfect.</p>';
            }
        } else {
            message += '<p class="info-message">No questions were attempted in this challenge.</p>';
        }

        elements.gameArea.innerHTML = `
            <div class="container">
                <h2 class="text-blue-600 mb-4">Challenge Complete!</h2>
                <div class="question-box">
                    ${message}
                </div>
                <div class="flex flex-wrap justify-center gap-4 mt-6">
                    <button class="btn btn-primary btn-lg" onclick="goHome()">Back to Home</button>
                    <button class="btn btn-success btn-lg" onclick="handlePlayAgain()">Try Again</button>
                </div>
            </div>
        `;
    }

    function handlePlayAgain() {
        const currentMode = gameState.mode;
        const currentCategory = gameState.currentListenAndTypeCategory; // Keep track of the category for listen-type

        resetGameState(); // Reset state for a new game

        if (currentMode === 'listen-type') {
            // If playing an individual listen-type category, go back to its selection
            displayListenAndTypeCategories();
        } else if (currentMode === 'allListenAndType') {
            // Go back to the combined sets selection
            initAllListenAndTypeSetsSelection();
        } else {
            selectMode(currentMode); // Start the game again in the same mode (shouldn't happen with current setup)
        }
    }


    // Listen & Type Game Functions
    // New function to display individual Listen & Type categories
    function displayListenAndTypeCategories() {
        console.log("Displaying individual Listen & Type categories...");
        // Get all keys from gameData.listenAndType
        const individualCategories = Object.keys(gameData.listenAndType);

        elements.gameArea.innerHTML = `
            <div class="container listen-type-selection">
                <h2 class="text-center text-blue-600">Select a Listen & Type Lesson</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    ${individualCategories.map(cat => `
                        <div class="card bg-purple-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                            <h5 class="text-xl font-semibold text-purple-800 mb-2">${cat}</h5>
                            <p class="text-gray-700 text-sm mb-4">Practice typing sentences from the "${cat}" lesson.</p>
                            <button class="btn btn-primary w-full" onclick="startListenAndTypeGameWithLimit('${cat}', 'all', gameData.listenAndType)">Start Lesson</button>
                        </div>
                    `).join('')}
                </div>
                <button class="btn btn-secondary mt-8" onclick="goHome()">Back to Home</button>
            </div>
        `;
    }


    // Function to handle the "All Listen And Type" button click
    function initAllListenAndTypeSetsSelection() {
        console.log("Initializing All Listen & Type Sets Selection...");
        const combinedSets = Object.keys(gameData.combinedListenAndTypeSets);

        elements.gameArea.innerHTML = `
            <div class="container listen-type-selection">
                <h2 class="text-center text-blue-600">Select a Combined Listen & Type Set</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    ${combinedSets.map(set => `
                        <div class="card bg-green-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                            <h5 class="text-xl font-semibold text-green-800 mb-2">${set}</h5>
                            <p class="text-gray-700 text-sm mb-4">Practice typing all sentences from ${set.toLowerCase()}.</p>
                            <button class="btn btn-success w-full" onclick="startListenAndTypeGameWithLimit('${set}', 'all', gameData.combinedListenAndTypeSets)">Start All</button>
                        </div>
                    `).join('')}
                </div>
                <button class="btn btn-secondary mt-8" onclick="goHome()">Back to Home</button>
            </div>
        `;
    }


    // Modified startListenAndTypeGameWithLimit function signature and logic
    function startListenAndTypeGameWithLimit(categoryName, limit, sourceObject) {
        console.log(`Starting Listen & Type Game for category "${categoryName}" with ${limit === 'all' ? 'all' : limit} items...`);
        let itemsToUse;

        // Determine the correct array of items based on the sourceObject and categoryName
        if (sourceObject[categoryName]) {
            itemsToUse = sourceObject[categoryName];
            gameState.currentListenAndTypeCategory = categoryName; // Store for play again
        } else {
            elements.gameArea.innerHTML = `
                <div class="container">
                    <h2 class="text-center text-red-600">Error: Listen & Type category "${categoryName}" not found!</h2>
                    <button class="btn btn-secondary mt-4" onclick="goHome()">Back to Home</button>
                </div>
            `;
            return;
        }

        if (limit !== 'all' && typeof limit === 'number') {
            itemsToUse = shuffleArray(itemsToUse).slice(0, limit);
        } else {
            itemsToUse = shuffleArray(itemsToUse);
        }

        // Ensure the pool is not empty
        if (itemsToUse.length === 0) {
            elements.gameArea.innerHTML = `
                <div class="container">
                    <h2 class="text-center text-red-600">No items available for this category!</h2>
                    <button class="btn btn-secondary mt-4" onclick="${gameState.mode === 'allListenAndType' ? 'initAllListenAndTypeSetsSelection()' : 'displayListenAndTypeCategories()'}">Back to Selection</button>
                    <button class="btn btn-secondary mt-4" onclick="goHome()">Back to Home</button>
                </div>
            `;
            return;
        }

        gameState.currentPool = itemsToUse;
        gameState.currentIndex = 0;
        gameState.score = 0;
        displayListenAndTypeQuestion();
    }

    function displayListenAndTypeQuestion() {
        stopTimer();
        if (gameState.currentIndex >= gameState.currentPool.length) {
            displayGameEndScreen();
            return;
        }

        const currentItem = gameState.currentPool[gameState.currentIndex];
        const timerDuration = 100; // Time for listening and typing

        elements.gameArea.innerHTML = `
            <div class="container listen-type-game">
                <div class="score-timer-container">
                    <div class="score">Score: <span id="score" class="text-blue-600">${gameState.score}</span></div>
                    <div class="timer">Time Left: <span id="timeLeft" class="text-blue-600">${gameState.timeLeft}s</span></div>
                </div>
                <div class="question-box text-left">
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">Listen carefully and type what you hear:</h3>
                    <p class="khmer-meaning">(${currentItem.khmer})</p>
                    <div class="audio-controls mt-3">
                        <button class="btn btn-info btn-lg" id="listenBtn"><i class="fas fa-volume-up mr-2"></i>Listen</button>
                    </div>
                </div>
                <div class="answer-input-container mt-4">
                    <input type="text" id="listenTypeAnswerInput" class="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" placeholder="Type what you heard here...">
                    <button class="btn btn-success w-full" onclick="checkListenAndTypeAnswer()">Check Answer</button>
                </div>
                <p id="feedback" class="mt-3 feedback-message"></p>
            </div>
        `;

        // Automatically speak the text when the question is displayed
        speakText(currentItem.answer || currentItem.sentence);

        document.getElementById('listenBtn').addEventListener('click', () => {
            speakText(currentItem.answer || currentItem.sentence);
        });

        document.getElementById('listenTypeAnswerInput').focus();
        document.getElementById('listenTypeAnswerInput').onkeyup = function (event) {
            if (event.key === "Enter") {
                checkListenAndTypeAnswer();
            }
        };

        startTimer(timerDuration, (timeLeft) => {
            document.getElementById('timeLeft').textContent = `${timeLeft}s`;
        }, () => {
            const feedbackElement = document.getElementById('feedback');
            feedbackElement.innerHTML = `<p class="error-message">Time's up! The correct answer was: <strong>${currentItem.answer || currentItem.sentence}</strong></p>`;
            document.getElementById('listenTypeAnswerInput').disabled = true;
            elements.gameArea.querySelector('.btn-success').disabled = true;
            feedbackElement.classList.add('show');
            setTimeout(() => {
                feedbackElement.classList.remove('show');
                gameState.currentIndex++;
                displayListenAndTypeQuestion();
            }, 2000);
        });
    }

    function checkListenAndTypeAnswer() {
        stopTimer();
        const currentItem = gameState.currentPool[gameState.currentIndex];
        const userAnswer = document.getElementById('listenTypeAnswerInput').value.trim();
        const feedbackElement = document.getElementById('feedback');

        // Normalize both strings for comparison (lowercase, remove punctuation, reduce multiple spaces)
        const normalizeText = (text) => text.toLowerCase().replace(/[.,!?;:'"-]/g, '').replace(/\s+/g, ' ').trim();

        const normalizedUserAnswer = normalizeText(userAnswer);
        const normalizedCorrectAnswer = normalizeText(currentItem.answer || currentItem.sentence);

        document.getElementById('listenTypeAnswerInput').disabled = true;
        elements.gameArea.querySelector('.btn-success').disabled = true;

        if (normalizedUserAnswer === normalizedCorrectAnswer) {
            gameState.score++;
            feedbackElement.innerHTML = `<p class="success-message">Correct! 🎉</p>`;
        } else {
            feedbackElement.innerHTML = `<p class="error-message">Incorrect. The correct answer was: <strong>${currentItem.answer || currentItem.sentence}</strong></p>`;
        }
        document.getElementById('score').textContent = gameState.score;

        feedbackElement.classList.add('show');

        setTimeout(() => {
            feedbackElement.classList.remove('show');
            gameState.currentIndex++;
            displayListenAndTypeQuestion();
        }, 3000); // Wait 3 seconds for feedback
    }

    // Initial call to set up the game
    document.addEventListener("DOMContentLoaded", goHome);

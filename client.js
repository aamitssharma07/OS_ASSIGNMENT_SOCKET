import { Socket } from 'net';
import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new Socket();
client.username = '';

client.connect(12345, 'localhost', () => {
    console.log('Connected to the server');
    authenticate();
});

function authenticate() {
    rl.question('Enter your username: ', (username) => {
        rl.question('Enter your password: ', (password) => {
            client.write(`auth:${username}:${password}`);
            client.username = username;
        });
    });
}

client.on('data', (data) => {
    const message = data.toString().trim();

    if (message === 'Authenticated') {
        console.log('Authentication successful!');
        interact();
    } else if (message === 'Authentication failed') {
        console.log('Authentication failed. Exiting.');
        client.end();
    } else {
        console.log(message);
    }
});

function interact() {
    rl.question('Choose an action (view_profile, change_password, or exit): ', (action) => {
        client.write(action);
        
        if (action === 'view_profile' || action.startsWith('change_password')) {
            // Listen for responses from the server
            client.once('data', (data) => {
                interact(); // Continue interaction after handling the response
            });
        } else if (action === 'exit') {
            client.end();
        } else {
            console.log('Invalid command');
            interact(); // Continue interaction after handling the response
        }
    });
}



client.on('end', () => {
    console.log('Disconnected from the server');
    rl.close();
});

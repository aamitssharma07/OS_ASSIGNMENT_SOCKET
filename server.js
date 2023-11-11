import { createServer } from 'net';

const users = {
    Amit: { password: 'greatpassword', profile: 'Age: 25  Country: India' },
    Cillian: { password: 'canttellu', profile: 'Age: 27  Country: UK' },
};

let currentUser = null;

const server = createServer((client) => {
    console.log('Client connected');

    client.on('data', (data) => {
        const message = data.toString().trim();
        if (message === 'exit') {
            client.end('Goodbye!\n');
        } else if (message.startsWith('auth:')) {
            const [_, username, password] = message.split(':');
            if (authenticateUser(username, password)) {
                currentUser = username;
                client.write('Authenticated\n');
            } else {
                client.write('Authentication failed\n');
            }
        } else if (message === 'view_profile') {
            const profileData = getProfileData(currentUser);
            client.write(`Profile Information: ${profileData}\n`);
        } else if (message.startsWith('change_password')) {
            const newPassword = message.split(':')[1];
            changePassword(currentUser, newPassword);
            client.write('Password changed successfully\n');
        } else {
            client.write('Invalid command\n');
        }
    });

    client.on('end', () => {
        console.log('Client disconnected');
    });
});

server.listen(12345, () => {
    console.log('Server is listening on port 12345');
});

function authenticateUser(username, password) {
    if (users[username] && users[username].password === password) {
        return true;
    }
    return false;
}

function getProfileData(username) {
    return `${username} Password: ${users[username].password} ${users[username].profile}`;
}

function changePassword(username, newPassword) {
    users[username].password = newPassword;
}

let userName= 'Max';
userName!=false ?
	console.log('Hello, '+userName+'!'):
	console.log('Hello!');
let userQuestion= 'Will I ever succeed at JavaScript?';
console.log(`${userName!=false ? userName: 'You'} asked: ${userQuestion}`);

function eightBall() {
  let random= Math.floor(Math.random() * 8);
  switch (random) {
            case 0:
           	 return 'it is certain';
            	break;
            case 1:
            	return 'It is decidedly so';
           		break;
            case 2:
            	return 'Reply hazy try again';
            	break;
            case 3:
            	return 'Cannot predict now';
            	break;
            case 4:
            	return 'Do not count on it';
            	break;
            case 5:
            	return 'My sources say no';
            	break;
            case 6:
            	return 'Outlook not so good';
            	break;
            case 7:
            	return 'Signs point to yes';
            break;
}}
console.log('Eightball says: '+eightBall())

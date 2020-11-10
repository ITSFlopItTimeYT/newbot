module.exports = {
  commands: ['add', 'addition'],
  description: "Finds the sum of two nums",
  expectedArgs: '<num1> <num2>',
  permissionError: 'You need admin permissions to run this command',
  minArgs: 2,
  maxArgs: 2,
  callback: (message, arguments, text) => {
    const num1 = +arguments[0]
    const num2 = +arguments[1]

    message.reply(`The sum is ${num1 + num2}`)
  },
  permissions: '',
  requiredRoles: [],
}
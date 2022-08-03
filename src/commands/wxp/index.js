const { Help } = require('@oclif/core')
const BaseCommand = require('../../BaseCommand')

class IndexCommand extends BaseCommand {
  async run () {
    const help = new Help(this.config)
    await help.showHelp(['app', '--help'])
  }
}

IndexCommand.description = 'Create, Build, and Deploy WXP Apps'

IndexCommand.args = []

module.exports = IndexCommand
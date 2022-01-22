import { TelegramClient } from 'telegram'
import { Logger } from 'telegram/extensions'
import { StringSession } from 'telegram/sessions'
import env from './env'

Logger.setLevel('none')

export const client = new TelegramClient(
  new StringSession(env.STRING_SESSION),
  env.API_ID,
  env.API_HASH,
  {
    connectionRetries: 10,
  }
)

export const start = () => client.start({ botAuthToken: '' })

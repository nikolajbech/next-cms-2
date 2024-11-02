import { exec } from 'child_process'
import * as p from '@clack/prompts'
import fs from 'fs-extra'

const openURL = async () => {
  // Get the keyword from the command line argument
  let keyword = process.argv[2]

  const packageJson = (await fs.readJson('package.json')) as {
    links: Record<string, string>
  }

  if (!keyword) {
    keyword = (await p.select({
      message: 'Select link to open',
      options: Object.keys(packageJson.links).map((key) => ({
        label: key,
        value: key,
      })),
    })) as string
  }

  // Function to open URL in default browser
  const openURL = (url: string) => {
    // Detect the platform and use appropriate command
    const platform = process.platform
    let command

    if (platform === 'win32') {
      // Windows
      command = `start "" "${url}"`
    } else if (platform === 'darwin') {
      // macOS
      command = `open "${url}"`
    } else if (platform === 'linux') {
      // Linux
      command = `xdg-open "${url}"`
    }

    if (!command) {
      console.error(`Unsupported platform: ${platform}`)
      return
    }

    // Execute the command to open the URL
    exec(command, (error) => {
      if (error) {
        // eslint-disable-next-line @typescript-eslint/no-base-to-string, @typescript-eslint/restrict-template-expressions
        console.error(`Error opening URL: ${error}`)
      }
    })
  }

  // Check if the keyword exists in the URL map
  const link = packageJson.links[keyword]

  if (link) {
    openURL(link)
  } else {
    console.log(`No URL found for keyword: ${keyword}`)
  }
}

void openURL()

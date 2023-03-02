import fs from 'fs'
import path from 'path'

export async function getFolders() {
	const srcPath = path.join(process.cwd(), 'src')

	return await fs.readdir(srcPath).filter((file) => {
		file.isDirectory()
	})
}

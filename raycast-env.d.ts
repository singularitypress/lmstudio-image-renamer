/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** LM Studio URL - URL of your LM Studio server */
  "lmstudioUrl": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `rename-images` command */
  export type RenameImages = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `rename-images` command */
  export type RenameImages = {}
}


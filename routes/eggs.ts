/*
 * Copyright (c) 2014-2023 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type Request, type Response } from 'express'

module.exports = function serveEggs () {
  return (req: Request, res: Response) => {
    res.json({
      eggs: [
        { id: 1, type: 'Easter Egg', discovered: false },
        { id: 2, type: 'Golden Egg', discovered: false },
        { id: 3, type: 'Secret Egg', discovered: false }
      ]
    })
  }
}

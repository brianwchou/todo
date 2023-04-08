#!/bin/bash

npx prisma migrate dev
nodemon server.ts
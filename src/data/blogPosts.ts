export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  readingTime: number;
  coverImage?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'getting-started-with-esp32',
    title: 'Getting Started with ESP32 Development',
    date: '2024-03-15',
    excerpt: 'A comprehensive guide to starting your journey with ESP32 microcontroller development.',
    readingTime: 8,
    coverImage: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    content: `
# Getting Started with ESP32 Development

ESP32 is a powerful and versatile microcontroller that's perfect for IoT projects. In this guide, we'll cover everything you need to know to get started.

## What is ESP32?

ESP32 is a series of low-cost, low-power system on a chip microcontrollers with integrated Wi-Fi and dual-mode Bluetooth. The ESP32 series employs either a Tensilica Xtensa LX6 microprocessor in both dual-core and single-core variations.

## Key Features

- Dual-core processor up to 240MHz
- Built-in Wi-Fi and Bluetooth
- Rich peripheral interface
- Ultra-low power consumption
- Hardware acceleration for encryption

## Setting Up Your Development Environment

1. Install ESP-IDF
2. Set up your preferred IDE
3. Connect your ESP32 board
4. Run your first program

## Code Example

\`\`\`cpp
#include <stdio.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "esp_system.h"
#include "esp_spi_flash.h"

void app_main(void)
{
    printf("Hello from ESP32!\\n");
}
\`\`\`

## Next Steps

After setting up your environment, you can:
- Explore GPIO programming
- Implement Wi-Fi connectivity
- Work with sensors
- Create IoT projects

Stay tuned for more tutorials on ESP32 development!
`
  },
  {
    slug: 'building-scalable-apis',
    title: 'Building Scalable APIs with NestJS',
    date: '2024-03-10',
    excerpt: 'Learn how to build robust and scalable APIs using NestJS framework with TypeScript.',
    readingTime: 12,
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    content: `
# Building Scalable APIs with NestJS

NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. Let's explore how to create a robust API using NestJS.

## Why NestJS?

NestJS provides an out-of-the-box application architecture that allows developers and teams to create highly testable, scalable, loosely coupled, and easily maintainable applications.

## Key Concepts

1. Modules
2. Controllers
3. Providers
4. Dependency Injection
5. Middleware

## Setting Up a NestJS Project

\`\`\`bash
npm i -g @nestjs/cli
nest new project-name
\`\`\`

## Creating a Basic Controller

\`\`\`typescript
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
\`\`\`

## Best Practices

- Use DTOs for data validation
- Implement proper error handling
- Follow SOLID principles
- Write comprehensive tests
- Use TypeORM for database operations

## Conclusion

NestJS provides a robust foundation for building enterprise-grade applications. Start small and gradually add complexity as needed.
`
  }
];
#!/usr/bin/env node

/**
 * Script de verificación de configuración de EmailJS
 * Ejecuta: node check-emailjs-config.js
 */

const fs = require('fs');
const path = require('path');

console.log('\n🔍 Verificando configuración de EmailJS...\n');

// Verificar si existe .env
const envPath = path.join(__dirname, '.env');
const envExists = fs.existsSync(envPath);

if (!envExists) {
  console.log('❌ Archivo .env no encontrado');
  console.log('   👉 Copia .env.example a .env: cp .env.example .env\n');
  process.exit(1);
}

console.log('✅ Archivo .env encontrado\n');

// Leer variables de entorno
require('dotenv').config();

const requiredVars = [
  'EMAILJS_PUBLIC_KEY',
  'EMAILJS_PRIVATE_KEY',
  'EMAILJS_TEMPLATE_CONTACT',
  'EMAILJS_TEMPLATE_STUDENT',
  'EMAILJS_TEMPLATE_ENTERPRISE',
  'EMAILJS_TEMPLATE_CONVERSEMOS'
];

let allConfigured = true;

console.log('📋 Variables de entorno:\n');

requiredVars.forEach(varName => {
  const value = process.env[varName];
  const isConfigured = value && !value.includes('tu_') && value !== '';
  
  if (isConfigured) {
    console.log(`✅ ${varName}: Configurado`);
  } else {
    console.log(`❌ ${varName}: No configurado o valor por defecto`);
    allConfigured = false;
  }
});

console.log('\n' + '='.repeat(60) + '\n');

if (allConfigured) {
  console.log('🎉 ¡Todo está configurado correctamente!\n');
  console.log('Puedes ejecutar: npm run dev\n');
} else {
  console.log('⚠️  Faltan variables por configurar\n');
  console.log('📖 Lee la guía de configuración:');
  console.log('   - EMAILJS-SETUP.md (guía completa)');
  console.log('   - EMAILJS-TEMPLATES.md (templates para EmailJS)');
  console.log('   - MIGRACION-EMAILJS.md (resumen rápido)\n');
  console.log('🔗 Dashboard de EmailJS: https://dashboard.emailjs.com/\n');
  process.exit(1);
}

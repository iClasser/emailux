import type { BrandCategory } from "./types"
import stripeWelcome from "./examples/stripe/stripeWelcome"
import stripeOtp from "./examples/stripe/stripeOtp"
import stripeResetPassword from "./examples/stripe/stripeResetPassword";
import stripeMarketingEm from "./examples/stripe/stripeMarketingEm";
import stripeReceipt from "./examples/stripe/stripeReceipt";
export const emailExamples: BrandCategory[] = [
  {
    id: "stripe",
    name: "Stripe",
    examples: [
      stripeWelcome,
      stripeOtp,
      stripeResetPassword,
      stripeMarketingEm,
      stripeReceipt,
    ],
  },
//   {
//     id: "github",
//     name: "GitHub",
//     examples: [
//       {
//         id: "github-welcome",
//         name: "Welcome Email",
//         type: "welcome",
//         brand: "GitHub",
//         htmlContent: `
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Welcome to GitHub</title>
// </head>
// <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0d1117;">
//   <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0d1117; padding: 40px 0;">
//     <tr>
//       <td align="center">
//         <table width="600" cellpadding="0" cellspacing="0" style="background-color: #161b22; border: 1px solid #30363d; border-radius: 6px; overflow: hidden;">
//           <tr>
//             <td style="padding: 40px 40px 32px;">
//               <div style="margin-bottom: 24px;">
//                 <svg height="32" width="32" viewBox="0 0 16 16" fill="#58a6ff">
//                   <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
//                 </svg>
//               </div>
//               <h1 style="margin: 0 0 24px; font-size: 24px; font-weight: 600; color: #c9d1d9;">Welcome to GitHub</h1>
//               <p style="margin: 0 0 16px; font-size: 16px; line-height: 24px; color: #8b949e;">Hey there,</p>
//               <p style="margin: 0 0 16px; font-size: 16px; line-height: 24px; color: #8b949e;">Welcome to GitHub! You're now part of a community of millions of developers building the future of software together.</p>
//               <p style="margin: 0 0 24px; font-size: 16px; line-height: 24px; color: #8b949e;">Start by creating your first repository or exploring projects from the community.</p>
//               <table cellpadding="0" cellspacing="0" style="margin: 0 0 24px;">
//                 <tr>
//                   <td style="background-color: #238636; border-radius: 6px; padding: 12px 24px; border: 1px solid rgba(240,246,252,0.1);">
//                     <a href="#" style="color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 500;">Explore GitHub</a>
//                   </td>
//                 </tr>
//               </table>
//               <p style="margin: 0; font-size: 14px; line-height: 20px; color: #6e7681;">Happy coding!</p>
//             </td>
//           </tr>
//           <tr>
//             <td style="padding: 24px 40px; background-color: #0d1117; border-top: 1px solid #30363d;">
//               <p style="margin: 0; font-size: 12px; line-height: 16px; color: #6e7681; text-align: center;">© 2025 GitHub, Inc. All rights reserved.</p>
//             </td>
//           </tr>
//         </table>
//       </td>
//     </tr>
//   </table>
// </body>
// </html>
//         `,
//         jsxCode: ``,
//       },
//       {
//         id: "github-reset",
//         name: "Password Reset",
//         type: "reset-password",
//         brand: "GitHub",
//         htmlContent: `
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Reset your password</title>
// </head>
// <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0d1117;">
//   <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0d1117; padding: 40px 0;">
//     <tr>
//       <td align="center">
//         <table width="600" cellpadding="0" cellspacing="0" style="background-color: #161b22; border: 1px solid #30363d; border-radius: 6px; overflow: hidden;">
//           <tr>
//             <td style="padding: 40px 40px 32px;">
//               <h1 style="margin: 0 0 24px; font-size: 24px; font-weight: 600; color: #c9d1d9;">Reset your password</h1>
//               <p style="margin: 0 0 16px; font-size: 16px; line-height: 24px; color: #8b949e;">We received a request to reset your password. Click the button below to choose a new password:</p>
//               <table cellpadding="0" cellspacing="0" style="margin: 24px 0;">
//                 <tr>
//                   <td style="background-color: #238636; border-radius: 6px; padding: 12px 24px; border: 1px solid rgba(240,246,252,0.1);">
//                     <a href="#" style="color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 500;">Reset Password</a>
//                   </td>
//                 </tr>
//               </table>
//               <p style="margin: 0 0 16px; font-size: 14px; line-height: 20px; color: #6e7681;">This link will expire in 1 hour.</p>
//               <p style="margin: 0; font-size: 14px; line-height: 20px; color: #6e7681;">If you didn't request a password reset, you can safely ignore this email.</p>
//             </td>
//           </tr>
//           <tr>
//             <td style="padding: 24px 40px; background-color: #0d1117; border-top: 1px solid #30363d;">
//               <p style="margin: 0; font-size: 12px; line-height: 16px; color: #6e7681; text-align: center;">© 2025 GitHub, Inc. All rights reserved.</p>
//             </td>
//           </tr>
//         </table>
//       </td>
//     </tr>
//   </table>
// </body>
// </html>
//         `,
//         jsxCode: ``,
//       },
//       {
//         id: "github-otp",
//         name: "OTP Verification",
//         type: "otp",
//         brand: "GitHub",
//         htmlContent: `
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Verify your device</title>
// </head>
// <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0d1117;">
//   <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0d1117; padding: 40px 0;">
//     <tr>
//       <td align="center">
//         <table width="600" cellpadding="0" cellspacing="0" style="background-color: #161b22; border: 1px solid #30363d; border-radius: 6px; overflow: hidden;">
//           <tr>
//             <td style="padding: 40px 40px 32px;">
//               <h1 style="margin: 0 0 24px; font-size: 24px; font-weight: 600; color: #c9d1d9;">Verify your device</h1>
//               <p style="margin: 0 0 16px; font-size: 16px; line-height: 24px; color: #8b949e;">Enter this verification code in your GitHub app:</p>
//               <table cellpadding="0" cellspacing="0" style="margin: 24px 0; width: 100%;">
//                 <tr>
//                   <td align="center" style="background-color: #0d1117; border: 1px solid #30363d; border-radius: 6px; padding: 24px;">
//                     <span style="font-size: 32px; font-weight: 700; letter-spacing: 8px; color: #58a6ff; font-family: 'Courier New', monospace;">293847</span>
//                   </td>
//                 </tr>
//               </table>
//               <p style="margin: 0 0 16px; font-size: 14px; line-height: 20px; color: #6e7681;">This code expires in 15 minutes.</p>
//               <p style="margin: 0; font-size: 14px; line-height: 20px; color: #6e7681;">If you didn't attempt to sign in, please secure your account immediately.</p>
//             </td>
//           </tr>
//           <tr>
//             <td style="padding: 24px 40px; background-color: #0d1117; border-top: 1px solid #30363d;">
//               <p style="margin: 0; font-size: 12px; line-height: 16px; color: #6e7681; text-align: center;">© 2025 GitHub, Inc. All rights reserved.</p>
//             </td>
//           </tr>
//         </table>
//       </td>
//     </tr>
//   </table>
// </body>
// </html>
//         `,
//         jsxCode: ``,
//       },
//     ],
//   },
//   {
//     id: "vercel",
//     name: "Vercel",
//     examples: [
//       {
//         id: "vercel-welcome",
//         name: "Welcome Email",
//         type: "welcome",
//         brand: "Vercel",
//         htmlContent: `
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Welcome to Vercel</title>
// </head>
// <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #000000;">
//   <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #000000; padding: 40px 0;">
//     <tr>
//       <td align="center">
//         <table width="600" cellpadding="0" cellspacing="0" style="background-color: #000000; border: 1px solid #333333; border-radius: 8px; overflow: hidden;">
//           <tr>
//             <td style="padding: 40px 40px 32px;">
//               <div style="margin-bottom: 32px;">
//                 <svg width="24" height="24" viewBox="0 0 76 65" fill="white">
//                   <path d="M37.5274 0L75.0548 65H0L37.5274 0Z"></path>
//                 </svg>
//               </div>
//               <h1 style="margin: 0 0 24px; font-size: 24px; font-weight: 600; color: #ffffff;">Welcome to Vercel</h1>
//               <p style="margin: 0 0 16px; font-size: 16px; line-height: 24px; color: #a1a1a1;">Hello,</p>
//               <p style="margin: 0 0 16px; font-size: 16px; line-height: 24px; color: #a1a1a1;">Thank you for joining Vercel. You're now ready to deploy your projects with the platform that powers the best web experiences.</p>
//               <p style="margin: 0 0 24px; font-size: 16px; line-height: 24px; color: #a1a1a1;">Get started by importing your first project or exploring our templates.</p>
//               <table cellpadding="0" cellspacing="0" style="margin: 0 0 24px;">
//                 <tr>
//                   <td style="background-color: #ffffff; border-radius: 6px; padding: 12px 24px;">
//                     <a href="#" style="color: #000000; text-decoration: none; font-size: 16px; font-weight: 500;">Import Project</a>
//                   </td>
//                 </tr>
//               </table>
//               <p style="margin: 0; font-size: 14px; line-height: 20px; color: #666666;">Need help? Check out our documentation or reach out to support.</p>
//             </td>
//           </tr>
//           <tr>
//             <td style="padding: 24px 40px; border-top: 1px solid #333333;">
//               <p style="margin: 0; font-size: 12px; line-height: 16px; color: #666666; text-align: center;">© 2025 Vercel Inc. All rights reserved.</p>
//             </td>
//           </tr>
//         </table>
//       </td>
//     </tr>
//   </table>
// </body>
// </html>
//         `,
//         jsxCode: ``,
//       },
//       {
//         id: "vercel-newsletter",
//         name: "Newsletter",
//         type: "newsletter",
//         brand: "Vercel",
//         htmlContent: `
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Vercel Newsletter</title>
// </head>
// <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #000000;">
//   <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #000000; padding: 40px 0;">
//     <tr>
//       <td align="center">
//         <table width="600" cellpadding="0" cellspacing="0" style="background-color: #000000; border: 1px solid #333333; border-radius: 8px; overflow: hidden;">
//           <tr>
//             <td style="padding: 40px 40px 32px;">
//               <h1 style="margin: 0 0 8px; font-size: 28px; font-weight: 700; color: #ffffff;">What's New at Vercel</h1>
//               <p style="margin: 0 0 32px; font-size: 14px; line-height: 20px; color: #666666;">January 2024</p>
              
//               <div style="margin-bottom: 32px; padding-bottom: 32px; border-bottom: 1px solid #333333;">
//                 <h2 style="margin: 0 0 12px; font-size: 20px; font-weight: 600; color: #ffffff;">Introducing Next.js 15</h2>
//                 <p style="margin: 0 0 16px; font-size: 16px; line-height: 24px; color: #a1a1a1;">The latest version of Next.js brings improved performance, new features, and better developer experience.</p>
//                 <a href="#" style="color: #0070f3; text-decoration: none; font-size: 14px; font-weight: 500;">Read more →</a>
//               </div>
              
//               <div style="margin-bottom: 32px; padding-bottom: 32px; border-bottom: 1px solid #333333;">
//                 <h2 style="margin: 0 0 12px; font-size: 20px; font-weight: 600; color: #ffffff;">Edge Functions Updates</h2>
//                 <p style="margin: 0 0 16px; font-size: 16px; line-height: 24px; color: #a1a1a1;">Deploy serverless functions closer to your users with our enhanced Edge Network.</p>
//                 <a href="#" style="color: #0070f3; text-decoration: none; font-size: 14px; font-weight: 500;">Learn more →</a>
//               </div>
              
//               <p style="margin: 0; font-size: 14px; line-height: 20px; color: #666666;">Stay updated with the latest from Vercel.</p>
//             </td>
//           </tr>
//           <tr>
//             <td style="padding: 24px 40px; border-top: 1px solid #333333;">
//               <p style="margin: 0; font-size: 12px; line-height: 16px; color: #666666; text-align: center;">© 2025 Vercel Inc. All rights reserved.</p>
//             </td>
//           </tr>
//         </table>
//       </td>
//     </tr>
//   </table>
// </body>
// </html>
//         `,
//         jsxCode: ``,
//       },
//       {
//         id: "vercel-otp",
//         name: "OTP Verification",
//         type: "otp",
//         brand: "Vercel",
//         htmlContent: `
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Verify your email</title>
// </head>
// <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #000000;">
//   <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #000000; padding: 40px 0;">
//     <tr>
//       <td align="center">
//         <table width="600" cellpadding="0" cellspacing="0" style="background-color: #000000; border: 1px solid #333333; border-radius: 8px; overflow: hidden;">
//           <tr>
//             <td style="padding: 40px 40px 32px;">
//               <h1 style="margin: 0 0 24px; font-size: 24px; font-weight: 600; color: #ffffff;">Verify your email</h1>
//               <p style="margin: 0 0 16px; font-size: 16px; line-height: 24px; color: #a1a1a1;">Please enter this verification code to continue:</p>
//               <table cellpadding="0" cellspacing="0" style="margin: 24px 0; width: 100%;">
//                 <tr>
//                   <td align="center" style="background-color: #1a1a1a; border: 1px solid #333333; border-radius: 6px; padding: 24px;">
//                     <span style="font-size: 32px; font-weight: 700; letter-spacing: 8px; color: #ffffff; font-family: 'Courier New', monospace;">582947</span>
//                   </td>
//                 </tr>
//               </table>
//               <p style="margin: 0 0 16px; font-size: 14px; line-height: 20px; color: #666666;">This code will expire in 10 minutes.</p>
//               <p style="margin: 0; font-size: 14px; line-height: 20px; color: #666666;">If you didn't request this, please ignore this email.</p>
//             </td>
//           </tr>
//           <tr>
//             <td style="padding: 24px 40px; border-top: 1px solid #333333;">
//               <p style="margin: 0; font-size: 12px; line-height: 16px; color: #666666; text-align: center;">© 2025 Vercel Inc. All rights reserved.</p>
//             </td>
//           </tr>
//         </table>
//       </td>
//     </tr>
//   </table>
// </body>
// </html>
//         `,
//         jsxCode: ``,
//       },
//     ],
//   },
//   {
//     id: "notion",
//     name: "Notion",
//     examples: [
//       {
//         id: "notion-welcome",
//         name: "Welcome Email",
//         type: "welcome",
//         brand: "Notion",
//         htmlContent: `
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Welcome to Notion</title>
// </head>
// <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #ffffff;">
//   <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff; padding: 40px 0;">
//     <tr>
//       <td align="center">
//         <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff;">
//           <tr>
//             <td style="padding: 40px 40px 32px;">
//               <h1 style="margin: 0 0 24px; font-size: 28px; font-weight: 700; color: #000000;">Welcome to Notion</h1>
//               <p style="margin: 0 0 16px; font-size: 16px; line-height: 26px; color: #37352f;">Hi there,</p>
//               <p style="margin: 0 0 16px; font-size: 16px; line-height: 26px; color: #37352f;">Welcome to Notion! We're thrilled to have you here. Notion is your all-in-one workspace for notes, tasks, wikis, and databases.</p>
//               <p style="margin: 0 0 24px; font-size: 16px; line-height: 26px; color: #37352f;">Here are a few things you can do to get started:</p>
              
//               <div style="margin-bottom: 16px; padding: 16px; background-color: #f7f6f3; border-radius: 4px;">
//                 <p style="margin: 0; font-size: 15px; line-height: 24px; color: #37352f;">📝 Create your first page</p>
//               </div>
//               <div style="margin-bottom: 16px; padding: 16px; background-color: #f7f6f3; border-radius: 4px;">
//                 <p style="margin: 0; font-size: 15px; line-height: 24px; color: #37352f;">🎨 Explore templates</p>
//               </div>
//               <div style="margin-bottom: 24px; padding: 16px; background-color: #f7f6f3; border-radius: 4px;">
//                 <p style="margin: 0; font-size: 15px; line-height: 24px; color: #37352f;">👥 Invite your team</p>
//               </div>
              
//               <table cellpadding="0" cellspacing="0" style="margin: 0 0 24px;">
//                 <tr>
//                   <td style="background-color: #000000; border-radius: 4px; padding: 12px 24px;">
//                     <a href="#" style="color: #ffffff; text-decoration: none; font-size: 15px; font-weight: 500;">Open Notion</a>
//                   </td>
//                 </tr>
//               </table>
              
//               <p style="margin: 0; font-size: 14px; line-height: 22px; color: #787774;">Need help? Check out our guides or reach out to support.</p>
//             </td>
//           </tr>
//           <tr>
//             <td style="padding: 24px 40px; border-top: 1px solid #e9e9e7;">
//               <p style="margin: 0; font-size: 12px; line-height: 18px; color: #9b9a97; text-align: center;">© 2025 Notion Labs, Inc. All rights reserved.</p>
//             </td>
//           </tr>
//         </table>
//       </td>
//     </tr>
//   </table>
// </body>
// </html>
//         `,
//         jsxCode: ``,
//       },
//       {
//         id: "notion-reset",
//         name: "Password Reset",
//         type: "reset-password",
//         brand: "Notion",
//         htmlContent: `
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Reset your password</title>
// </head>
// <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #ffffff;">
//   <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff; padding: 40px 0;">
//     <tr>
//       <td align="center">
//         <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff;">
//           <tr>
//             <td style="padding: 40px 40px 32px;">
//               <h1 style="margin: 0 0 24px; font-size: 28px; font-weight: 700; color: #000000;">Reset your password</h1>
//               <p style="margin: 0 0 16px; font-size: 16px; line-height: 26px; color: #37352f;">We received a request to reset the password for your Notion account.</p>
//               <p style="margin: 0 0 24px; font-size: 16px; line-height: 26px; color: #37352f;">Click the button below to create a new password:</p>
              
//               <table cellpadding="0" cellspacing="0" style="margin: 0 0 24px;">
//                 <tr>
//                   <td style="background-color: #000000; border-radius: 4px; padding: 12px 24px;">
//                     <a href="#" style="color: #ffffff; text-decoration: none; font-size: 15px; font-weight: 500;">Reset Password</a>
//                   </td>
//                 </tr>
//               </table>
              
//               <p style="margin: 0 0 16px; font-size: 14px; line-height: 22px; color: #787774;">This link will expire in 1 hour for security reasons.</p>
//               <p style="margin: 0; font-size: 14px; line-height: 22px; color: #787774;">If you didn't request this, you can safely ignore this email.</p>
//             </td>
//           </tr>
//           <tr>
//             <td style="padding: 24px 40px; border-top: 1px solid #e9e9e7;">
//               <p style="margin: 0; font-size: 12px; line-height: 18px; color: #9b9a97; text-align: center;">© 2025 Notion Labs, Inc. All rights reserved.</p>
//             </td>
//           </tr>
//         </table>
//       </td>
//     </tr>
//   </table>
// </body>
// </html>
//         `,
//         jsxCode: ``,
//       },
//     ],
//   },
]

export type EmailExamples = typeof emailExamples;
---
title: "📓 3.0.0.02 Installing C# and .NET"
day: weekend
---

First we'll install .NET, which provides access to the C# language. Follow along with instructions for your operating system below.

## Installing the .NET SDK
---

C# and .NET programming are fully supported on Mac operating systems. We can install .NET and C# on Mac, Windows, or Linux in a few steps:

1. If you use a Mac computer, you need to determine whether your computer was made with the Apple Chip or Intel Chip, because there is a different SDK to download for each chip. [Follow this Apple support article to learn whether your computer has an Apple chip or Intel chip.](https://support.apple.com/en-us/HT211814)

2. **Download the .NET 6 SDK (Software Development Kit)**. To view all download options for the .NET 6 SDK, [visit this page](https://dotnet.microsoft.com/en-us/download/dotnet/6.0). Or, click on any of the following links for an immediate download from Microsoft:

* [For Windows](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-6.0.402-windows-x64-installer)
* [For Macs with Apple Chip](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-6.0.402-macos-arm64-installer)
* [For Macs with Intel Chip](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-6.0.402-macos-x64-installer)

3. **Open the file.** This will launch an installer which will walk you through installation steps. Use the default settings the installer suggests.

4. **Confirm the installation is successful.** First, restart your command line shell (Terminal or GitBash) if it's already open, and then run the command `$ dotnet --version`. You should see something like this in response:

```bash
6.0.402
```

This means both .NET and C# are successfully installed and your computer recognizes the `dotnet` command.

In the next two lessons, we'll install `dotnet-script` and MySQL.  

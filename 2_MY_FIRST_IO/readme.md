# LEARN YOU THE NODE.JS FOR MUCH WIN!

## MY FIRST I/O! (Exercise 3 of 13)

Create a file named my-first-io.js.

Write a program that uses a single synchronous filesystem operation to  
 read a file and print the number of newlines (\n) it contains to the
console (stdout), similar to running cat file | wc -l.

The full path to the file to read will be provided as the first
command-line argument (i.e., process.argv[2]). You do not need to make  
 your own test file.

─────────────────────────────────────────────────────────────────────────────

## HINTS

To perform a filesystem operation you are going to need the fs module from  
 the Node core library. To load this kind of module, or any other "global"  
 module, use the following incantation:

     const fs = require('fs')

Now you have the full fs module available in a variable named fs.

All synchronous (or blocking) filesystem methods in the fs module end with  
 'Sync'. To read a file, you'll need to use
fs.readFileSync('/path/to/file'). This method will return a Buffer object  
 containing the complete contents of the file.

Documentation on the fs module can be found by pointing your browser here:  
 file://C:\Users\aorti\AppData\Roaming\npm\node_modules\learnyounode\docs-n  
 odejs\fs.html

Buffer objects are Node's way of efficiently representing arbitrary arrays  
 of data, whether it be ascii, binary or some other format. Buffer objects  
 can be converted to strings by simply calling the toString() method on  
 them. e.g. const str = buf.toString().

Documentation on Buffers can be found by pointing your browser here:
file://C:\Users\aorti\AppData\Roaming\npm\node_modules\learnyounode\docs-n
odejs\buffer.html

If you're looking for an easy way to count the number of newlines in a
string, recall that a JavaScript String can be .split() into an array of
substrings and that '\n' can be used as a delimiter. Note that the test
file does not have a newline character ('\n') at the end of the last line,
so using this method you'll end up with an array that has one more element
than the number of newlines.

Check to see if your program is correct by running this command:

     $ learnyounode verify my-first-io.js

─────────────────────────────────────────────────────────────────────────────

» To print these instructions again, run: learnyounode print  
 » To execute your program in a test environment, run: learnyounode run
program.js  
 » To verify your program, run: learnyounode verify program.js  
 » For help run: learnyounode help

---

## OTHER NOTES FROM THE MODULE DOCUMENTTION

### File System

The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.

To use this module:

```
const fs = require('fs');
```

All file system operations have synchronous and asynchronous forms.

Exceptions that occur using synchronous operations are thrown immediately and may be handled using try…catch, or may be allowed to bubble up.

```
const fs = require('fs');

try {
  fs.unlinkSync('/tmp/hello');
  console.log('successfully deleted /tmp/hello');
} catch (err) {
  // handle the error
}
```

### File paths

Paths specified using a Buffer are useful primarily on certain POSIX operating systems that treat file paths as opaque byte sequences. On such systems, it is possible for a single file path to contain sub-sequences that use multiple character encodings. As with string paths, Buffer paths may be relative or absolute:

Example using an absolute path on POSIX:

```
fs.open(Buffer.from('/open/some/file.txt'), 'r', (err, fd) => {
  if (err) throw err;
  fs.close(fd, (err) => {
    if (err) throw err;
  });
});
```

On Windows, Node.js follows the concept of per-drive working directory. This behavior can be observed when using a drive path without a backslash. For example fs.readdirSync('c:\\') can potentially return a different result than fs.readdirSync('c:'). For more information, see this MSDN page.

#!/usr/bin/perl

# First CGI test using Perl

use CGI;

print "Content-type: text/html\n\n";

print <<"EOF";
<html>

<head>
<title>Hello, world!</title>
</head>

<body>
<h1>Hello, world!</h1>
</body>

</html>
EOF

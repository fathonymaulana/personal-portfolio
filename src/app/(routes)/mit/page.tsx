import React from "react";

const MITLicense = () => {
  return (
    <>
      <div className="container py-8 md:py-32 px-8 md:px-80 space-y-16 text-justify">
        <div className="w-full text-center space-y-6">
          <p className="text-sm">
            Copyright (c) 2012-2024 Scott Chacon and others
          </p>
          <h1 className="text-7xl tracking-tighter">MIT License</h1>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            git/git-scm.com is licensed under the
          </p>
          <p className="text-sm text-muted-foreground">
            A short and simple permissive license with conditions only requiring
            preservation of copyright and license notices. Licensed works,
            modifications, and larger works may be distributed under different
            terms and without source code.
          </p>
        </div>
        <div className="space-y-2">
          <p className="italic">
            Permission is hereby granted, free of charge, to any person
            obtaining a copy of this software and associated documentation files
            (the &quot;Software&quot;), to deal in the Software without restriction,
            including without limitation the rights to use, copy, modify, merge,
            publish, distribute, sublicense, and/or sell copies of the Software,
            and to permit persons to whom the Software is furnished to do so,
            subject to the following conditions:
          </p>
        </div>
        <div className="space-y-2">
          <p className="italic">
            The above copyright notice and this permission notice shall be
            included in all copies or substantial portions of the Software.
          </p>
        </div>
        <div className="space-y-2">
          <p className="italic">
            THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
            BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
            ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
            CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </p>
        </div>
      </div>
    </>
  );
};

export default MITLicense;

import { Component } from "react";
import Head from "next/head";

export class Header extends Component {
  render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <style jsx global>{`
          body {
            width: 600px;
            height: 500px;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAAAAABURb1YAAAFnklEQVR4AWWXCY4cwXbE6h4JMhCvMPc/ov+3Ox9QsLCGpKlFHILd+UQ559AGDkBSFXWmomonqkL/XuUcIPUcONjHCJyE36KaqNiaRnVCG9TGpgIU9hIfohCBVGj24ammo04lU3Fy0NZDAyZi5AElHjgEGlRbG1WjraIt7TmADQkAaoEHsOXAAaeqat9RVTqjosyEH5W+DQCQt8BzIJMfXJI3e5tGRefSlRn3NrO3scnvNl26FN5RITGNfjm3GM/+FhQgnlQeImC+dEm8rzHVTNGL9EADVsTAIfGJBziRy7RlmcZU1IYpHIj+4JrWym8/XSwzompmFNVOFdTOAAfs61KZ6eXcp57fykQUOxNBmTesz2HpCnCg3UV/bA7VRpWGNqKtrYLTs0ilCjgxiZxjeLC5dDPBFn4Pn2ja6BRUL10DTgET4Focq8rn8casxV4E5tIlZvytqtfivCOKZrqc38G7egnkXecyPZdzubc57VtUnbfL+a0u3b1N3d9Mci7cKocHoh3xihLQ6fXUlgTOOfVkXSUFINoWHhqxE23RTmCqtoEJaITkIrUCkU9fnqpqm+40VSXS3CLaSzfGBb4rPuOSfN0ylLve6/jpcrbL2dTlnOdv5AamKjLvLN1XruMNS/cul/hx8twKpKYRaE2DOp8+c+lW7uVXVQ7Vx0x1G3HXjNocsHCac7NbWc6egwJVHu2kRTVNC2pqv2U4XNsv5/yWJlV9+NJ1C7xluInlcr7rK+Kg+qy7onQqgnbi7UHcS3qXjdw3bO5tumycYlVssMI5EXXpRnatPK362KodtVU60cm+eQT10sVLFwJYlVaf7UGSoi5dQF3DvnTX3UvXTPO8quKH7jsXhm/PxfKWZXqBM5sS33kmKtC31Q05fI095i5IPpyzRXqSy1Sr17p1F7NE8vMtnNbLpVVtk8c0OrfF0sKxHnIpYgHW4puMomTz8mgmrSjpvrxhX97l7LqLpl7bW9BH9/MNzF8XwRqL8/m7c30eFYV5VX3QTquK06XbLt16F4ks+8Z9m6gPtpcuk3OvibCekng4lzMHi9MoqZmKj9tdbQCbc7bcEA+oEJduRNNL1waf1tuI9MDBUK8t3k9uFz3rrqadO9Ln9TL/ezlwDvky3TW7ZmXfpc77TN0yhOXnP939LvVDV9s+tgLTm0TqYd1lea3PRFuVjLa562HdPbCfascGrvO3DMeIATVqVRO8vfHrbupdfo1dzlXUdkVLZsS1mLPG3rWcl+4B1l1537h0VXzU1tyLG7cCu+LSrSqo06hocy3WCcil65qHDbuEYzQN2HpT3jFt9LEFvHTP1nxbXOEkbhkKmd+6BTfVZ/I143z/Fyz6Za92o0I7I6gzfeYAHPwy/Rb43L9TLtMt8CtwW1xvQvbR1g9n7qJRNN1kdxcdH7cM58Szxq679MdLOhE72t6VNEpHHkzwRyjBcGth+dE99pIkVbWaEWmvnQ8Yl7Mp59zpRWXdNo6odrO754Zzvxf/010nP7onb1TR+bgbVPB9PcADJvH/043Kvk0UzLRxQ6UiaeTAcyxYl2lyrrvZv8v2wE7U1uVcST0821jJeIDKWuyxiqnuko7q3+zJYXJ46nV3D67EyL+lQ9F2qkr+3kUafQpwYE8T329p6y7OX1TF97fQv/c+l87zj7Hsgpig4qRLd9fMPs74rLGyCzRbhmVqpy7nqvPmTD1gvKe7b2U8u1QzmtuDuEtbgT3c8QBJveo6cueFkUwv59nVmfFw1jl4/unuOT9qERV76ers8n23z/c8/Xy7a4lwwLplmGusbRp33Up13+ZDN3KPxNVMhY62vUQyRTse6+cKHtZYjIfDh260Cjbb3Vy6R8H8SMBzqSwrsB1UTacoknlnOb8V4JD9Njfpwz/fHjpBUeevcAtcl65sqXPX9D87RUTLc/dfOgAAAABJRU5ErkJggg==);
            background-repeat: repeat;
            padding: 0px 16px;
            color: #bebebe;
          }
        `}</style>
      </div>
    );
  }
}
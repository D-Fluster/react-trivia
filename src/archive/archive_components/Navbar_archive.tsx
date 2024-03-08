import image from "/src/assets/brAInbow.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <div className="navbar-brand">
            <img
              src={image}
              alt="Millennial Trivia"
              width="50"
              className="d-inline-block align-text-top"
            />
            <em>
              <strong>¡</strong>
            </em>
            &nbsp;Millennial Trivia&nbsp;
            <em>
              <strong>!</strong>
            </em>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

/* BOOTSTRAP HTML (NOT USED in Header.tsx):
// Navbar:
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      Bootstrap
    </a>
  </div>
</nav>

// Display headings:
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
*/

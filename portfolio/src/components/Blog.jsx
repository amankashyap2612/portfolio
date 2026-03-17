function Blog() {
  return (
    <section id="blog">

      <div className="container">

        <h2 className="text-center display-6 fw-bold mb-5">
          Recent <span className="text-gradient">Blogs</span>
        </h2>

        <div className="row g-4">

          <div className="col-md-6">

            <div className="blog-card">

              <div className="blog-img">
                Thumbnail
              </div>

              <div className="blog-content">

                <p className="text-gradient mb-1">
                  Oct 12, 2024
                </p>

                <h4>
                  Web Design Trends 2024
                </h4>

                <a href="#" className="text-white">
                  Read More →
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Blog;
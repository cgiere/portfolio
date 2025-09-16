#!/bin/bash

# Navigate to your Angular project root
PROJECT_DIR=$(pwd)
echo "Cleaning and setting up portfolio in $PROJECT_DIR"

# Array of component names
components=("home" "projects" "skills" "contact")

for comp in "${components[@]}"; do
  comp_dir="src/app/components/$comp"

  echo "Cleaning $comp component folder..."

  # Remove any incorrectly named files
  rm -f "$comp_dir/$comp.html" "$comp_dir/$comp.ts" 2>/dev/null

  # Add proper placeholder HTML
  case $comp in
    home)
      cat <<EOF > "$comp_dir/$comp.component.html"
<section style="padding:50px; text-align:center; background:#f1f1f1;">
  <h1>Home Section</h1>
  <p>Welcome to my portfolio!</p>
</section>
EOF
      ;;
    projects)
      cat <<EOF > "$comp_dir/$comp.component.html"
<section style="padding:50px; text-align:center; background:#e2e2e2;">
  <h1>Projects Section</h1>
  <p>Here are some of my projects.</p>
</section>
EOF
      ;;
    skills)
      cat <<EOF > "$comp_dir/$comp.component.html"
<section style="padding:50px; text-align:center; background:#d3d3d3;">
  <h1>Skills Section</h1>
  <p>Programming languages, frameworks, and tools I know.</p>
</section>
EOF
      ;;
    contact)
      cat <<EOF > "$comp_dir/$comp.component.html"
<section style="padding:50px; text-align:center; background:#c4c4c4;">
  <h1>Contact Section</h1>
  <p>Email: yourname@example.com</p>
</section>
EOF
      ;;
  esac
done

# Overwrite app.component.html with the four component tags
cat <<EOF > src/app/app.component.html
<app-home></app-home>
<app-projects></app-projects>
<app-skills></app-skills>
<app-contact></app-contact>
EOF

echo "Clean portfolio setup complete! Run 'ng serve -o' to view it."


import path from "path";
import "dotenv/config";

// these values are likely fine as-is
const root_path = process.cwd();
const org = process.env.ORG;
const local_docs_path = path.join(root_path, 'docs');
const local_static_assets_path = path.join(root_path, 'static');
const local_tracks_path = path.join(root_path, 'tracks')
const scratch_directory_path = path.join(root_path, 'tmp');
const repo_images_path = 'images';
const local_images_path = path.join(local_static_assets_path, 'images');

// values hard-coded here can be changed if needed
const config = {
  fetch_images: false,
  show_lesson_numbers: false,
  show_week_numbers: false,
  student_handbook_repo: "shared",
  shared_files_repo: "shared",
  curriculum_layout_file: "curriculum-layout.yaml",
  root_path,
  org,
  local_docs_path,
  local_static_assets_path,
  local_tracks_path,
  scratch_directory_path,
  repo_images_path,
  local_images_path,
}

export default config;

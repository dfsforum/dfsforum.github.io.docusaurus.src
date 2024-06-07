# echo 'use flake' > .envrc

{ resholve, lib, coreutils, direnv, nix }:

# resholve does not yet support `finalAttrs` call pattern hence `rec`
# https://github.com/abathur/resholve/issues/107
resholve.mkDerivation rec {
  pname = "nix-direnv";
  version = "3.0.4";

  src = builtins.path {
    path = ./.;
    name = pname;
  };

  # skip min version checks which are redundant when built with nix
  postPatch = ''
    sed -i 1iNIX_DIRENV_SKIP_VERSION_CHECK=1 direnvrc
  '';

  installPhase = ''
    install -m400 -D direnvrc $out/share/${pname}/direnvrc
  '';

  solutions = {
    default = {
      scripts = [ "share/${pname}/direnvrc" ];
      interpreter = "none";
      inputs = [ coreutils nix ];
      fake = {
        builtin = [
          "PATH_add"
          "direnv_layout_dir"
          "has"
          "log_error"
          "log_status"
          "watch_file"
        ];
        function = [
          # not really a function - this is in an else branch for macOS/homebrew that
          # cannot be reached when built with nix
          "shasum"
        ];
      };
      keep = {
        "$cmd" = true;
        "$direnv" = true;
      };
      execer = [
        "cannot:${direnv}/bin/direnv"
        "cannot:${nix}/bin/nix"
      ];
    };
  };

  # TODO: change to current project 
  meta = with lib; {
    description = "Project description here";
    /*homepage = "";*/   /* prod url */
    homepage = "";  /* testnet url */
    github = "";  /* github repo url */
    #license = licenses.mit;
    #platforms = platforms.unix;
  };
}

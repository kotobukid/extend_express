# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/focal64"
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # config.vm.network "forwarded_port", guest: 80, host: 8080, host_ip: "127.0.0.1"

  # config.vm.network "private_network", ip: "192.168.33.10"

  config.vm.network "public_network", bridge: "eno1"

  config.vm.synced_folder "./data", "/vagrant_data", "create": true

  config.cache.auto_detect = true

  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
    vb.memory = "8192"
  end

  config.vm.provision "shell", inline: <<-SHELL
    apt-get update
    # apt-get install git-all build-essential
    # curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
    # source ~/.bashrc
    # nvm install v16.20.0
    # nvm use v16.20.0

    # apt-get install -y apache2
    # mkdir downloads
    # cd downloads
    # wget https://github.com/redis/redis/archive/7.0.10.tar.gz
    # tar zxvf 7.0.10.tar.gz
    # cd redis-7.0.10
    # cp redis.conf ~/redis.conf
  SHELL
end

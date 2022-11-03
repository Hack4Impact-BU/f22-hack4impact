FROM ubuntu

WORKDIR /react
RUN apt update
RUN apt install curl --yes

## Install Node
RUN apt install git --yes
RUN /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"  
RUN echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /root/.profile \
&& echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> /root/.profile \
&& eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)" \
&& brew install node

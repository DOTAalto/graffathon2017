from fabric.api import *
from fabric.contrib.project import *

env.hosts = ['dot@kapsi.fi']

def deploy():
    local('gulp --production')
    rsync_project(local_dir='./build/', remote_dir='/home/users/dot/sites/www.graffathon.fi/www/2017/', delete=True)
